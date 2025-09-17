const IntroductionSector= ({
    sectorTitle,
    descr
}) => {
    return (
        <div className="bg-white ">
            <div className="max-w-7xl w-full pt-16 pb-8 m-auto flex flex-col items-center justify-between
                xl:px-0 xl:gap-20 
                lg:px-20 lg:gap-10 
                md:px-20 
                max-md:px-5 max-md:py-10"
            >
                <div className="px-10 flex gap-5 items-center w-full justify-between">
                    <div className="w-1/2 flex flex-col gap-5">
                        <p className="brand-text-blue text-sm font-jakarta">Get Success Together!</p>
                        <h1 className="brand-text-gray text-7xl font-heading font-extrabold">{sectorTitle}</h1>
                        <p className="text-gray-500">{descr}</p>
                    </div>
                    <div className="w-1/2">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionSector;