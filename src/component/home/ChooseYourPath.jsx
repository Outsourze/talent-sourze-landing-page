import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ChooseYourPathHome = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-10 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <h1 className="font-bold text-5xl font-heading">Choose your path</h1>
            <div className="flex items-center gap-8">
                <div className="brand-bg-blue rounded-2xl p-5 flex flex-col items-center justify-center gap-5 pt-15 pb-10">
                    <h2 className="font-extrabold text-6xl font-heading text-white">Employers</h2>
                    <p className="text-lg text-white text-center">Access a pool of highly skilled candidates ready to help your business grow.</p>
                    <Link href={"/"} className="py-3 px-5 flex items-center gap-3 rounded-full bg-white">
                        <span className="text-lg font-bold font-source">Continue</span>
                        <FaArrowRightLong size={17}/>
                    </Link>
                </div>
                <div className="border-[#0077B6] border-2 rounded-2xl p-5 flex flex-col items-center justify-center gap-5 pt-15 pb-10">
                    <h2 className="font-extrabold text-6xl font-heading">Candidate</h2>
                    <p className="text-lg brand-text-gray text-center">Discover exciting opportunities and land your next role with top employers.</p>
                    <Link href={"/"} className="py-3 px-5 flex items-center gap-3 rounded-full brand-bg-blue">
                        <span className="text-lg font-bold font-source">Continue</span>
                        <FaArrowRightLong size={17}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ChooseYourPathHome;