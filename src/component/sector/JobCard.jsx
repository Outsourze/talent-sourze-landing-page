import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const JobCard = ({
    id,
    title, 
    setSelectedJob
}) => {
    const handleClick = () => {
        setSelectedJob({
            id: id,
            title: title,
        })
    }
    return (
        <button 
            onClick={handleClick} 
            className="flex items-start justify-between shadow-md rounded-xl border border-gray-100 
                lg:w-[31%] lg:p-5 
                md:w-[47%] md:px-5 py-7
                max-md:w-full max-md:py-7 max-md:px-5" 
        >
            <div className="flex flex-col gap-3">
                <h2 className="font-bold leading-6 text-left md:text-[1.3rem] max-md:text-base max-sm:text-sm">{title}</h2>
                <div className="flex items-center gap-2 text-xs brand-text-blue font-semibold font-jakarta">
                    <span className="">Apply Now</span>
                    <GoArrowRight />
                </div>
            </div>
            <div className="brand-bg-blue rounded-full lg:p-3 md:p-2 max-md:p-2 max-sm:p-1">
                <FaCheck color="#ffffff"/>
            </div>
        </button>
    )
}

export default JobCard;