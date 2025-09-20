import Image from "next/image";

const IntroductionSector= ({
    sectorTitle,
    descr,
    sectorImg
}) => {


    return (
        <div className="bg-white ">
            <div className="max-w-7xl w-full pt-16 pb-8 m-auto flex flex-col items-center justify-between
                xl:px-0 xl:gap-20 
                lg:px-20 lg:gap-10 
                md:px-20 
                max-md:px-5 max-md:py-10"
            >
                <div className="flex gap-5 items-center w-full justify-between py-5 
                  xl:px-10 
                  lg:px-0">
                    <div className="w-1/2 flex flex-col md:gap-5 max-md:gap-3 max-sm:gap-2">
                        <p className="brand-text-blue text-sm font-jakarta">Get Success Together!</p>
                        <h1 className="brand-text-gray font-heading font-extrabold 
                          xl:text-7xl lg:text-6xl md:text-4xl max-md:text-3xl max-sm:text-2xl max-sm:leading-7">{sectorTitle}</h1>
                        <p className="text-gray-500 md:text-base max-md:text-sm max-sm:text-xs">{descr}</p>
                    </div>
                    <div className="w-1/2 flex gap-5 py-5">
                      <div className="relative bg-blue-50 rounded-2xl overflow-hidden -translate-y-5
                        lg:w-[256px] lg:h-[360px]
                        md:w-[186px] md:h-[240px]
                        max-md:w-[136px] max-md:h-[190px]
                        max-sm:w-[106px] max-sm:h-[150px]">
                        <Image
                          alt="sector img"
                          src={`${process.env.NEXT_PUBLIC_BASE_API}${sectorImg[0]}`}
                          fill
                          className="object-cover object-center" // or object-contain if you don’t want cropping
                        />
                      </div>

                      <div className="relative bg-blue-50 rounded-2xl overflow-hidden translate-y-5
                        lg:w-[256px] lg:h-[360px]
                        md:w-[186px] md:h-[240px]
                        max-md:w-[136px] max-md:h-[190px]
                        max-sm:w-[106px] max-sm:h-[150px]">
                        <Image
                          alt="sector img"
                          src={`${process.env.NEXT_PUBLIC_BASE_API}${sectorImg[1]}`}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionSector;