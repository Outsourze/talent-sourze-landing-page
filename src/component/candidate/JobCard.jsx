import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const JobCard = ({
    title,
    jobs
}) => {
    return (
        <div className="border rounded-4xl pt-10 pb-4 flex flex-col justify-between
        lg:w-[31%] md:w-[47%] sm:w-[46%] max-sm:w-full">
            <div className="">
                <div className="relative flex items-center gap-5 px-8 pb-5">
                    <div className="p-4 bg-black rounded-full">
                        <FaUserDoctor className="brand-text-blue "/>    
                    </div>
                    <h3 className="font-bold font-heading">{title}</h3>
                    <div className="h-12 w-4 brand-bg-blue absolute left-0 rounded-tr-md rounded-br-md"></div>
                </div>

                <div className="px-8">
                    <ul className="flex flex-col pt-5 border-t">
                       {jobs.map((j, index) => (
                            <li key={index}>{j.title}</li>
                        ))} 
                    </ul>
                </div>
            </div>
            <div className="flex items-end justify-end px-8 mt-5">
               <Link className="flex items-center gap-1 brand-text-blue font-semibold" href={"/"}>
                    <span>Apply</span>
                    <GoArrowUpRight size={20}/>
                </Link> 
            </div>
        </div>
    )
}

export default JobCard;