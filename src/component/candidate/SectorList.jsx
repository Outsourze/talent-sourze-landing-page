import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import JobCard from "./JobCard";

const SectorList = () => {
    const [sectorsData, setSectorsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let isMounted = true;

      const fetchSectorsData = async () => {
                 
        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_API}sectors`
          );

          if (isMounted) setSectorsData(data);
        } catch (err) {
          console.error(err);
        } finally {
          if (isMounted) setLoading(false);
        }
      };

      fetchSectorsData();

      return () => {
        isMounted = false; // prevent state update if component unmounted
      };
    }, []);

    // Memoized sectors (optional if you add search/filter later)
    const memoizedSectors = useMemo(() => sectorsData, [sectorsData]);

    if (loading) return <p className="text-center py-10">Loading sectors...</p>;

    console.log({memoizedSectors});
    
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="px-10 flex flex-col w-full gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-heading font-[900] leading-16">Job Listings</h1>
                    <p className="text-lg text-gray-500">Your next career move is here. Explore exciting roles and connect with companies looking for talent like you.</p>
                </div>
                <div className="flex justify-between flex-wrap gap-5">
                    {memoizedSectors.map((sector, index) => (
                        <JobCard key={index} jobs={sector.jobs} title={sector.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectorList;