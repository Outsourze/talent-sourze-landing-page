import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";

const SectorCard = ({
    title,
    descr,
    sectorId
}) => {
    return (
        <div className="border border-[#0077B6] rounded-md pt-10 pb-8 flex flex-col justify-between
        lg:w-[31%] md:w-[47%] sm:w-[46%] max-sm:w-full">
            <div className="flex flex-col justify-center items-center">
                <div className="relative flex flex-col items-center gap-5 px-8 pb-5">
                    <div className="p-4 brand-bg-blue rounded-md">
                        <FaUserDoctor className="text-[#1E1E1F]"/>    
                    </div>
                    <div className="flex flex-col gap-1 text-center">
                        <h3 className="font-bold font-heading">{title}</h3>
                        <p className="leading-4 text-gray-500">{descr}</p>
                    </div>
                </div>
                <Link className="font-source px-6 py-3 rounded-md brand-bg-blue text-white text-sm" href={`/sector/${sectorId}`}>
                    Discover More
                </Link> 
            </div>
        </div>
    )
}

export default SectorCard;