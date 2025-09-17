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
import EmpowerHero from "./Empower-side-2";

const benefits = [
    "Access a curated pool of skilled professionals",
    "Simplify recruitment with smart tools",
    "Achieve faster, smarter hires"
]

const EmpowerHome = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="xl:px-10 md:px-5 flex items-center w-full justify-between">
                <div className="flex flex-col items-start gap-8 
                xl:w-[40%] lg:w-[40%]">
                    <h1 className="brand-text-gray font-heading font-extrabold 
                    xl:mb-10 xl:text-[3.5rem] 
                    lg:mb-5 lg:text-5xl md:text-[3.2rem] ">Empower Your Workforce</h1>
                    <div className="flex flex-col gap-5">
                        {benefits.map((benefit, index) => (
                            <div className="gap-3 flex items-center" key={index}>
                                <FaCircleCheck className="brand-text-gray" size={16}/>
                                <p className="brand-text-gray 
                                xl:text-lg lg:text-base md:text-lg">{benefit}</p>
                            </div>
                        ))}
                    </div>
                    <Link href={"/"} className="flex items-center gap-2 border-[1.5px] border-[#18181B] rounded-md px-7 py-4">
                      <span className="brand-text-gray font-bold font-source">Get Started</span>
                      <FiArrowRight size={20}/>
                    </Link>
                </div>
                <EmpowerHero />
            </div>
        </div>
    )
}

export default EmpowerHome;