

const GetStarted = ({
    setIsFormOpen
}) => {
    return (
        <div className="max-w-7xl w-full pt-16 pb-8 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="w-full rounded-4xl brand-bg-blue flex flex-col justify-center items-center gap-5 min-h-96">
                <h1 className="font-heading text-4xl text-white font-bold">Your Recruitment Partner for Every Industry.</h1>
                <p className="text-lg text-white">From job posting to candidate screening, our HR team handles the process—making hiring simple and efficient.</p>
                <button onClick={() => setIsFormOpen(true)} className="px-5 py-3 font-source rounded-lg bg-[#1C1C1C] text-white">Get Started</button>
            </div>
        </div>
    )
}

export default GetStarted;