

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
            <div className="w-full rounded-4xl brand-bg-blue flex flex-col justify-center items-center gap-5 max-md:text-center lg:px-14 md:px-5
                md:min-h-96 max-md:min-h-80">
                <h1 className="font-heading text-white font-bold
                    lg:text-4xl md:text-3xl max-md:text-2xl">Your Global Recruitment Partner</h1>
                <p className="text-white
                    md:text-lg max-md:text-base">
                        We connect international companies with skilled Filipino professionals — managing every step 
                        from sourcing to onboarding. Hiring made simple, smart, and human.
                </p>
                <button onClick={() => setIsFormOpen(true)} className="px-5 py-3 font-source rounded-lg bg-[#1C1C1C] text-white cursor-pointer">Get Started</button>
            </div>
        </div>
    )
}

export default GetStarted;