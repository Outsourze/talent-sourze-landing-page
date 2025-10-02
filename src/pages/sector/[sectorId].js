import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import IntroductionSector from "@/component/sector/Introduction";
import JobList from "@/component/sector/JobList";
import Modal from "@/component/ui/modal";
import ContactForm from "@/component/candidate/ContactForm";
import { ToastContainer } from 'react-toastify';

const Sector = () => {
    const router = useRouter();
    const { sectorId } = router.query;
    const [search, setSearch] = useState("");
    const [sector, setSector] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState({
      id: null,
      title: "",
    })

      // Fetch sector and jobs
    useEffect(() => {
        if (!sectorId) return;

        const fetchSectorJobs = async () => {
            try {
              const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_BASE_API}/sectors/${sectorId}/jobs`
              );

              setSector(data);
            } catch (err) {
              console.error("Failed to fetch jobs:", err);
            } finally {
              setLoading(false);
            }
        };

        fetchSectorJobs();
    }, [sectorId]);

    // Memoize filtered jobs to avoid recalculation on every render
    const filteredJobs = useMemo(() => {
      if (!sector?.jobs) return [];
      if (!search) return sector.jobs;

      const lowerSearch = search.toLowerCase();
      return sector.jobs.filter((job) =>
        job.title.toLowerCase().includes(lowerSearch)
      );
    }, [sector, search]);

    if (loading) return <p className="p-8 text-gray-500">Loading jobs...</p>;
    if (!sector) return <p className="p-8 text-gray-500">Sector not found.</p>;
    
    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
          <IntroductionSector 
              sectorTitle={sector.name}
              descr={sector.description}
              sectorImg={sector.imagePaths}
          />
          <JobList 
            setSelectedJob={setSelectedJob}
            jobList={sector.jobs}
          />
          {selectedJob.id && (
            <Modal>
              <ContactForm 
                sectorId={sectorId}
                selectedJob={selectedJob}
                setSelectedJob={setSelectedJob}
              />
            </Modal>
          )}
          <ToastContainer 
            position="bottom-right"
          />
        </div>
    )
}

export default Sector;