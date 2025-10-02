import Image from "next/image";
import hero1 from "@/assets/images/home/hero1.png";
import hero2 from "@/assets/images/home/hero2.png";
import hero3 from "@/assets/images/home/hero3.png";
import string from "@/assets/images/home/string.png";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { useMediaQuery } from "@/utility/useMediaQuery";

const list = [{
    title: "Opportunities",
    desc: "Right roles, right fit",
}, {
    title: "Growth",
    desc: "Scaling careers and teams",
}, {
    title: "Connected",
    desc: "Bridging talent & business",
}]

const IntroductionHome = () => {
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
    const isMobile = useMediaQuery("(max-width: 767px)");
    
    return (
        <div className="max-w-7xl w-full m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-10 xl:pt-10 
            lg:px-20 lg:gap-10 lg:pt-10
            md:px-20 md:gap-10 md:py-5
            max-md:px-5 max-md:gap-5 max-md:py-3"
        >
            <div className="flex items-stretch w-full justify-between">
                <div className="flex flex-col w-1/2 justify-center 
                md:gap-5 max-md:gap-2">
                    <div className="brand-bg-blue 
                    lg:h-2 lg:w-48 
                    md:h-1 md:w-24"></div>
                    <h1 className="font-heading font-black 
                    xl:text-7xl xl:leading-18
                    lg:text-5xl lg:leading-12 
                    md:text-3xl md:leading-7
                    max-md:text-3xl max-md:leading-7">Let’s Create <br/> Memorable <br/> Journey</h1>
                    <p className="font-semibold text-gray-600 
                    xl:text-2xl xl:leading-normal
                    lg:text-xl lg:leading-normal
                    md:text-sm md:leading-tight
                    max-md:text-xs max-md:leading-3">Discover a platform where talent meets the right opportunities. We bridge the gap between professionals and companies ready to grow.</p>
                    <div className={`relative flex z-10 overflow-hidden lg:rounded-4xl md:rounded-xl max-md:rounded-lg md:-bottom-10  max-md:-bottom-5
                      ${isDesktop ? "w-[770px]" : isLaptop ? "w-[650px]" : isTablet ? "w-[500px]" : "w-[350px]"}
                    `}>
                      {/* blur gradient edge */}
                      <div className="absolute top-0 right-0 h-full w-20 
                        bg-gradient-to-l from-transparent to-transparent 
                        backdrop-blur-md pointer-events-none z-10"/>

                        <div className="brand-bg-blue absolute right-10 top-1/2 -translate-y-1/2 z-10 
                        md:p-3 md:rounded-xl
                        max-md:p-2 max-md:rounded-lg">
                            <IoSearch className="" color="white" size={isMobile ? 16 : 35}/>
                        </div>
                        <div className="bg-white flex w-[90%] 
                        xl:px-10 xl:py-8 xl:gap-5 
                        lg:px-8 lg:py-7 lg:gap-4
                        md:px-6 md:py-5 md:gap-3
                        max-md:px-4 max-md:py-3 max-md:gap-3">
                            {list.map((list, index) => (
                              <div key={index}>
                                <h4 className="font-heading font-semibold 
                                lg:text-lg 
                                md:text-sm
                                max-md:text-xs">{list.title}</h4>
                                <p className="text-gray-600 leading-4
                                lg:text-base
                                md:text-xs
                                max-md:text-[10px]">{list.desc}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative 
                xl:w-[45%] 
                lg:w-1/2 xl:h-[550px] lg:h-[500px] 
                md:w-1/2 md:h-[380px]
                max-md:w-1/2 max-md:h-[300px]">
                     <Image
                      className="absolute left-5 bottom-0 max-md:hidden"
                      src={hero1}
                      alt="hero image 1"
                      width={isDesktop ? 224 : isLaptop ? 200 : isTablet ? 140 : 120}
                      height={isDesktop ? 302 : isLaptop ? 270 : isTablet ? 200 : 160}
                    />

                    {/* hero2 */}
                    <Image
                      className="absolute left-5 max-md:hidden"
                      src={hero2}
                      alt="hero image 2"
                      width={isDesktop ? 224 : isLaptop ? 200 : isTablet ? 140 : 120}
                      height={isDesktop ? 237 : isLaptop ? 200 : isTablet ? 150 : 130}
                    />

                    {/* hero3 */}
                    <div className="absolute right-0 top-10">
                        <div className="relative">
                            <Image
                              className=""
                              src={hero3}
                              alt="hero image 3"
                              width={isDesktop ? 278 : isLaptop ? 240 : isTablet ? 180 : 160}
                              height={isDesktop ? 432 : isLaptop ? 370 : isTablet ? 280 : 230}
                            />
                            <Image 
                                src={string}
                                width={isDesktop || isLaptop ? 82 : 52}
                                height={isDesktop || isLaptop ? 70 : 42}
                                className="absolute
                                lg-bottom-15 lg:right-0
                                md:-bottom-10 md:right-0
                                max-md:hidden"
                                alt="spring"
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex items-center w-full justify-between border border-gray-300 rounded-lg py-5
            max-md:flex-col">
                <div className="flex justify-center flex-col gap-3 items-center py-5 
                md:w-[31%] md:border-r md:border-r-gray-300 md:px-5
                max-md:w-full max-md:border-b max-md:border-b-gray-300">
                    <h4 className="font-heading font-extrabold text-5xl brand-text-gray">+500K</h4>
                    <p className="text-lg text-[#4D4D56] lg:text-lg md:text-base md:text-center">Talent connections made globally</p>
                </div>
                <div className="flex justify-center flex-col gap-3 items-center py-5 
                md:w-[31%] md:border-r md:border-r-gray-300 md:px-5
                max-md:w-full max-md:border-b max-md:border-b-gray-300">
                    <h4 className="font-heading font-extrabold text-5xl brand-text-gray">85%</h4>
                    <p className="text-lg text-[#4D4D56] lg:text-lg md:text-base md:text-center">Successful placements</p>
                </div>
                <div className="flex justify-center flex-col gap-3 items-center py-5 
                md:w-[31%] md:px-5
                max-md:w-full">
                    <h4 className="font-heading font-extrabold text-5xl brand-text-gray">1,200</h4>
                    <p className="text-lg text-[#4D4D56] lg:text-lg md:text-base md:text-center">Companies served</p>
                </div>
            </div>
        </div>
    )
}
export default IntroductionHome;