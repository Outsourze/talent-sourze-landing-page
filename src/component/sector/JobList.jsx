import JobCard from "./JobCard";


const JobList = ({
    jobList,
    setSelectedJob
}) => {

    return (
        <div className="max-w-7xl w-full pt-0 pb-5 m-auto flex flex-col items-center justify-between
                xl:px-0 xl:gap-20 
                lg:px-20 lg:gap-10 
                md:px-20 
                max-md:px-5 max-md:py-10"
            >
                <div className="flex flex-wrap gap-5 items-stretch w-full justify-between">
                    {jobList.map((list, index) => (
                        <JobCard 
                            key={index}
                            id={list.id}
                            title={list.title}
                            setSelectedJob={setSelectedJob}
                        />
                    ))}
                </div>  
        </div>
    )
}

export default JobList;