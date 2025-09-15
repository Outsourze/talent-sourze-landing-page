import Link from "next/link";

const GetStarted = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="brand-bg-blue flex justify-center items-center w-full py-20 rounded-2xl px-10">
                <div className="text-white flex-col gap-5 flex items-center ">
                    <h1 className="text-4xl font-heading font-bold md:text-center max-md:text-center max-md:text-3xl">Your Recruitment Partner for Every Industry.</h1>
                    <p className="text-lg md:text-center max-md:text-center max-md:text-sm">From job posting to candidate screening, our HR team handles the process—making hiring simple and efficient.</p>
                    <Link className="font-source font-medium bg-[#1C1C1C] px-5 py-4 rounded-md" href={"/"}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;