import Image from "next/image";
import introImg from "@/assets/images/intro-hero.png";
import Link from "next/link";

const IntroductionHome = () => {
    return (
        <div className="max-w-7xl py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="flex items-start brand-bg-blue rounded-3xl pt-20 pb-0 px-15">
                <div className="flex flex-col w-1/2 gap-10 items-start">
                    <h1 className="text-6xl text-white font-heading font-extrabold leading-16">Your Gateway to Global Talent and Opportunities</h1>
                    <p className="text-lg font-semibold leading-7">At Talent Sourze, we connect top professionals with leading employers worldwide. Whether you’re hiring or looking for your next career move, we make it simple.</p>
                    <Link 
                        href={"/"} 
                        className="bg-[#191A23] text-white px-8 py-4 rounded-2xl font-source"
                    >Begin Your Journey</Link>
                </div>
                <div className="w-1/2 px-10">
                    <Image 
                        alt="hero img"
                        src={introImg}
                    />
                </div>
            </div>
            <div className="flex items-center w-full justify-between border border-gray-300 rounded-lg py-5">
                <div className="flex justify-center flex-col gap-3 items-center w-[31%] py-5 border-r border-r-gray-300">
                    <h4 className="font-heading font-bold text-5xl brand-text-gray">+500K</h4>
                    <p className="text-lg text-[#4D4D56]">Talent connections made globally</p>
                </div>
                <div className="flex justify-center flex-col gap-3 items-center w-[31%] py-5 border-r border-r-gray-300">
                    <h4 className="font-heading font-bold text-5xl brand-text-gray">85%</h4>
                    <p className="text-lg text-[#4D4D56]">Successful placements</p>
                </div>
                <div className="flex justify-center flex-col gap-3 items-center w-[31%] py-5 ">
                    <h4 className="font-heading font-bold text-5xl brand-text-gray">1,200</h4>
                    <p className="text-lg text-[#4D4D56]">Companies served</p>
                </div>
            </div>
        </div>
    )
}
export default IntroductionHome;