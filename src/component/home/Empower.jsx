import Link from "next/link";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import DotOverlay from "../ui/DotOverlay";
import { FaBriefcase } from "react-icons/fa";4
import C from "@/assets/images/home-empower/C.png";
import { RxDotsHorizontal } from "react-icons/rx";
import blueCircleImg from "@/assets/images/home-empower/rounded-blue.png";
import orangeCircleImg from "@/assets/images/home-empower/rounded-orange.png";
import animatedProfile from "@/assets/images/home-empower/animated-profile.png";
import circleOverlay from "@/assets/images/home-empower/circle-overlay.png";

const benefits = [
    "Access a curated pool of skilled professionals",
    "Simplify recruitment with smart tools",
    "Achieve faster, smarter hires"
]

const EmpowerHome = () => {
    return (
        <div className="max-w-7xl w-full py-20 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="px-10 flex items-center w-full justify-between">
                <div className="flex flex-col items-start gap-8 w-[40%]">
                    <h1 className="brand-text-gray font-heading font-extrabold text-[3.5rem] mb-10">Empower Your Workforce</h1>
                    <div className="flex flex-col gap-5">
                        {benefits.map((benefit, index) => (
                            <div className="gap-3 flex items-center" key={index}>
                                <FaCircleCheck className="brand-text-gray" size={16}/>
                                <p className="brand-text-gray text-lg">{benefit}</p>
                            </div>
                        ))}
                    </div>
                    <Link href={"/"} className="flex items-center gap-2 border-[1.5px] border-[#18181B] rounded-md px-7 py-4">
                      <span className="brand-text-gray font-bold font-source">Get Started</span>
                      <FiArrowRight size={20}/>
                    </Link>
                </div>
                <div className="px-5 w-[40%]">
                    <div className="relative w-full">
                        <div className="w-full h-[450px] relative overflow-hidden -z-30">
                            <DotOverlay />
                        </div>
                        <div className="bg-white absolute bottom-20 -left-10 flex flex-col items-center gap-3 py-5 px-7 border-1 border-gray-200 rounded-2xl">
                            <div className="p-5 rounded-full brand-bg-blue">
                                <FaBriefcase size={25}/>
                            </div>
                            <h4 className="text-4xl font-semibold brand-text-gray">64</h4>
                            <p className="text-gray-500">Completed</p>
                        </div>
                        <div className="bg-white absolute bottom-20 right-0 flex items-center gap-7 py-4 px-6 border-1 border-gray-200 rounded-lg">
                            <div className="bg-[#B63F00] p-3 rounded-full">
                                <Image width={16} height={16} src={C} alt="c"/>
                            </div>
                            <p className="font-semibold">Waiting Task</p>
                            <p className="text-gray-400 text-lg">02</p>
                        </div>
                        <div className="min-w-[200px] bg-white absolute -top-5 right-14 border-1 border-gray-200 rounded-lg">
                            <div className="flex flex-col items-start gap-7 relative py-5 px-6 ">
                                <div className="flex items-center justify-between w-full">
                                    <h5 className="font-heading font-bold text-[#6A6A77]">MEETING</h5>
                                    <RxDotsHorizontal size={20} className="brand-text-gray"/>
                                </div>
                                <div className="flex flex-col gap-1 brand-text-gray">
                                    <p className="font-semibold">July 28</p>
                                    <p className="font-semibold text-3xl ">2:20 <span className="text-gray-400">PM</span></p>
                                </div>
                                <div className="flex items-center gap-2 font-heading border-t border-t-gray-200 pt-5">
                                    <p className="bg-[#B63F00] rounded-3xl font-semibold text-xs py-1 px-3">WEB</p>
                                    <p className="brand-bg-blue rounded-3xl font-semibold text-xs py-1 px-3">DESIGN</p>
                                </div>
                                <Image className="absolute bottom-0 right-0" width={35} height={35} src={blueCircleImg} alt="blueimg"/>
                                <Image className="absolute bottom-0 right-0" width={20} height={20} src={orangeCircleImg} alt="orangeimg"/>
                            </div>
                        </div>
                        <div className="p-2 rounded-full bg-white absolute top-20 left-20">
                            <div className="w-[60px] h-[60px] bg-amber-100 rounded-full overflow-hidden flex items-center justify-center ">
                                <Image 
                                    width={60}
                                    height={60}
                                    alt="animated profile"
                                    src={animatedProfile}
                                    className="rounded-full object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        
                        <div className="h-[270px] w-[270px] rounded-full overflow-hidden -z-20 absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                            <Image 
                                width={270}
                                height={270}
                                className="object-cover" 
                                src={circleOverlay} alt="Circle overlay"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpowerHome;