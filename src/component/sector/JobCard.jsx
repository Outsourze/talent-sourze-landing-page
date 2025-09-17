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
            className="flex items-start justify-between w-[31%] p-5 shadow-md rounded-xl border border-gray-100" 
        >
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-[1.3rem] leading-6 text-left">{title}</h2>
                <div className="flex items-center gap-2 text-xs brand-text-blue font-semibold font-jakarta">
                    <span>Apply Now</span>
                    <GoArrowRight />
                </div>
            </div>
            <div className="brand-bg-blue p-3 rounded-full">
                <FaCheck color="#ffffff"/>
            </div>
        </button>
    )
}

export default JobCard;