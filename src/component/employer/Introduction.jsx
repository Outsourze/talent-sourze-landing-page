import Image from "next/image";
import hero1 from "@/assets/images/employer/hero-1.png";
import Link from "next/link";
import { useMediaQuery } from "@/utility/useMediaQuery";

const IntroductionEmployer = ({ setIsFormOpen }) => {
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 xl:pt-20
            lg:px-20 lg:gap-10 lg:pt-20
            md:px-20 md:pt-14
            max-md:px-5 max-md:py-12"
        >
            <div className="flex items-center w-full justify-between max-md:gap-3">
                <div className="flex flex-col  items-start
                    lg:gap-10 md:gap-5 max-md:gap-3
                    md:w-1/2 max-md:w-full ">
                    <h1 className="font-heading brand-text-gray font-[900]
                    xl:text-8xl xl:leading-24
                    lg:text-6xl lg:leading-12 
                    md:text-5xl max-md:text-5xl">Employers</h1>
                    <p className=" font-bold
                        lg:text-xl md:text-base max-md:text-sm max-sm:text-xs"> 
                            Build your dream team with exceptional Filipino talent. From sourcing and screening to onboarding and support, we make global hiring simple, reliable, and cost-effective.</p>
                    <button 
                        onClick={() => setIsFormOpen(true)}
                        className="cursor-pointer font-source text-white brand-bg-blue rounded-md shadow-md
                        md:px-5 md:py-4 md:text-base hover:bg-black duration-300
                        max-sm:px-3 max-md:py-2 max-md:text-sm "
                    >Start Hiring</button>
                </div>
                <div className="px-5 flex justify-end xl:w-[40%] lg:w-1/2 md:w-1/2 max-md:w-1/2">
                  <div className="relative inline-block">
                    {/* Overlay (shadow card) */}
                    <div
                      className="absolute inset-0 bg-[#D9D9D980] xl:rounded-[2.5rem] md:rounded-[2rem] max-md:rounded-[1rem] max-sm:rounded-[0.8rem] z-0
                                 xl:translate-x-[-2rem] xl:translate-y-[-2rem]
                                 lg:translate-x-[-1.5rem] lg:translate-y-[-1.5rem]
                                 md:translate-x-[-1rem] md:translate-y-[-1rem]
                                 max-md:translate-x-[-1rem] max-md:translate-y-[-1rem]"
                    />
                    {/* Image */}
                    <Image
                      width={isDesktop ? 423 : isLaptop ? 380 : isTablet ? 300 : 200}
                      height={isDesktop ? 551 : isLaptop ? 511 : isTablet ? 420 : 300}
                      src={hero1}
                      alt="hero1"
                      className="rounded-2xl relative z-10"
                    />
                  </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionEmployer;