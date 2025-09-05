import Image from "next/image";
import introImg from "@/assets/images/intro-hero.png";
import Link from "next/link";

const IntroductionHome = () => {
    return (
        <div className="max-w-7xl py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 md:gap-10
            max-md:px-5 max-md:gap-5 max-md:py-10"
        >
            <div className="flex items-start brand-bg-blue rounded-3xl pt-20 
            xl:pb-0 
            md:pb-10 md:px-15 
            max-md:pb-5 max-md:px-10">
                <div className="flex flex-col items-start 
                md:w-1/2 md:gap-10 
                max-md:w-full max-md:gap-5">
                    <h1 className=" text-white font-heading font-extrabold 
                    xl:text-6xl xl:leading-16
                    lg:text-5xl lg:leading-12 
                    md:text-3xl max-md:text-3xl">Your Gateway to Global Talent and Opportunities</h1>
                    <p className="font-semibold 
                    xl:text-lg  xl:leading-7
                    lg:text-base lg:leading-5">At Talent Sourze, we connect top professionals with leading employers worldwide. Whether you’re hiring or looking for your next career move, we make it simple.</p>
                    <Link 
                        href={"/"} 
                        className="bg-[#191A23] text-white font-source
                        md:px-8 md:py-4 md:rounded-2xl
                        max-md:text-sm max-md:px-5 max-md:py-3 max-md:rounded-lg"
                    >Begin Your Journey</Link>
                </div>
                <div className="w-1/2 xl:px-10 max-md:hidden">
                    <Image 
                        alt="hero img"
                        src={introImg}
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