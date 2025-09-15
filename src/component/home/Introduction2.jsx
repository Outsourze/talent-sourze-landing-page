import Image from "next/image";
import hero1 from "@/assets/images/home/hero1.png";
import hero2 from "@/assets/images/home/hero2.png";
import hero3 from "@/assets/images/home/hero3.png";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

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
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 md:gap-10
            max-md:px-5 max-md:gap-5 max-md:py-10"
        >
            <div className="flex items-stretch pt-20 w-full gap-20
            xl:pb-0 xl:px-0
            lg:px-5
            md:pb-10 md:px-15 
            max-md:pb-5 max-md:px-10">
                <div className="flex flex-col w-1/2 justify-center gap-5 ">
                    <div className="w-44 brand-bg-blue h-2"></div>
                    <h1 className="font-heading font-black text-6xl">Let’s Create <br/> Memorable <br/> Journey</h1>
                    <p className="font-semibold text-xl text-gray-600">Discover a platform where talent meets the right opportunities. We bridge the gap between professionals and companies ready to grow.</p>
                    <div className="relative flex rounded-4xl -bottom-10 w-[770px] z-10 overflow-hidden">
                      {/* blur gradient edge */}
                      <div className="absolute top-0 right-0 h-full w-20 
                        bg-gradient-to-l from-transparent to-transparent 
                        backdrop-blur-md pointer-events-none z-10"/>

                        <div className="p-3 brand-bg-blue rounded-xl absolute right-10 top-1/2 -translate-y-1/2 z-10">
                            <IoSearch className="" color="white" size={35}/>
                        </div>
                        <div className="bg-white  flex gap-5 px-10 py-8 w-[90%]">
                            {list.map((list, index) => (
                              <div key={index}>
                                <h4 className="text-lg font-heading font-semibold">{list.title}</h4>
                                <p className="text-gray-600">{list.desc}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative w-1/2 h-[550px]">
                    <Image 
                        className="absolute bottom-0" 
                        src={hero1} 
                        alt="heroimages 1"
                        width={224}
                        height={302}
                    />
                    <Image 
                        className="absolute" 
                        src={hero2} 
                        alt="heroimages 2"
                        width={224}
                        height={237}
                    />
                    <Image 
                        width={278}
                        height={432}
                        className="absolute right-0 top-10"
                        src={hero3} 
                        alt="heroimages 3"
                    />
                </div>
            </div>
            <div className="flex items-center w-full justify-between border border-gray-300 rounded-lg py-5
            max-md:flex-col">
                <div className="flex justify-center flex-col gap-3 items-center py-5 
                md:w-[31%] md:border-r md:border-r-gray-300 md:px-5
                max-md:w-full max-md:border-b max-md:border-b-gray-300">
                    <h4 className="font-heading font-bold text-5xl brand-text-gray">+500K</h4>
                    <p className="text-lg text-[#4D4D56] lg:text-lg md:text-base md:text-center">Talent connections made globally</p>
                </div>
                <div className="flex justify-center flex-col gap-3 items-center py-5 
                md:w-[31%] md:border-r md:border-r-gray-300 md:px-5
                max-md:w-full max-md:border-b max-md:border-b-gray-300">
                    <h4 className="font-heading font-bold text-5xl brand-text-gray">85%</h4>
                    <p className="text-lg text-[#4D4D56] lg:text-lg md:text-base md:text-center">Successful placements</p>
                </div>
                <div className="flex justify-center flex-col gap-3 items-center py-5 
                md:w-[31%] md:px-5
                max-md:w-full">
                    <h4 className="font-heading font-bold text-5xl brand-text-gray">1,200</h4>
                    <p className="text-lg text-[#4D4D56] lg:text-lg md:text-base md:text-center">Companies served</p>
                </div>
            </div>
        </div>
    )
}
export default IntroductionHome;