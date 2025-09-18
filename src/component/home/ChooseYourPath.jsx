import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ChooseYourPathHome = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-10 
            lg:px-20 lg:gap-10 
            md:px-20 md:gap-10
            max-md:px-5 max-md:py-10 max-md:gap-5"
        >
            <h1 className="font-bold font-heading
            md:text-5xl max-md:text-4xl">Choose your path</h1>
            <div className="flex items-center gap-8 md:flex-row max-sm:flex-col">
                <div className="brand-bg-blue rounded-2xl p-5 flex flex-col items-center justify-center gap-5 pt-15 pb-10">
                    <h2 className="font-extrabold font-heading text-white 
                    lg:text-6xl md:text-4xl max-md:text-3xl">Employers</h2>
                    <p className="text-white text-center lg:text-lg md:text-base">Access a pool of highly skilled candidates ready to help your business grow.</p>
                    <Link href={"/"} className="py-3 px-5 flex items-center gap-3 rounded-full bg-white">
                        <span className="font-bold font-source lg:text-lg md:text-base">Continue</span>
                        <FaArrowRightLong size={17}/>
                    </Link>
                </div>
                <div className="border-[#0077B6] border-2 rounded-2xl p-5 flex flex-col items-center justify-center gap-5 pt-15 pb-10">
                    <h2 className="font-extrabold font-heading 
                    lg:text-6xl md:text-4xl max-md:text-3xl">Candidate</h2>
                    <p className="brand-text-gray text-center lg:text-lg md:text-base">Discover exciting opportunities and land your next role with top employers.</p>
                    <Link href={"/"} className="py-3 px-5 flex items-center gap-3 rounded-full brand-bg-blue">
                        <span className="font-bold font-source lg:text-lg md:text-base">Continue</span>
                        <FaArrowRightLong size={17}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ChooseYourPathHome;