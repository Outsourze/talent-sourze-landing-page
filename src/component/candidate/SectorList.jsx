import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import SectorCard from "./SectorCard";

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

    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="flex flex-col w-full gap-10
            xl:px-10 md:px-5 max-md:px-5">
                <div className="flex flex-col gap-5">
                    <h1 className="font-heading font-[900] brand-text-gray 
                    xl:text-5xl xl:leading-16
                    lg:text-4xl lg:leading-12 
                    md:text-4xl max-md:text-4xl">Job Listings</h1>
                    <p className="text-gray-500
                    md:text-lg max-md:text-base">Your next career move is here. Explore exciting roles and connect with companies looking for talent like you.</p>
                </div>
                <div className="flex justify-between gap-5
                sm:flex-wrap max-sm:flex-col">
                  {memoizedSectors.length > 0 ? (
                    memoizedSectors.map((sector, index) => (
                      <SectorCard 
                        key={index} 
                        sectorId={sector.id}
                        descr={sector.description}
                        title={sector.name}
                      />
                    ))
                  ) : (
                    <div 
                      className="flex flex-col items-center justify-center p-6 border border-[#0077B6] rounded-2xl shadow-sm text-gray-500 w-full md:w-[300px] mx-auto"
                    >
                      <p className="font-semibold">No jobs available yet</p>
                    </div>
                  )}
                </div>
            </div>
        </div>
    )
}

export default SectorList;