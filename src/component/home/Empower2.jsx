import Link from "next/link";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import DotOverlay from "../ui/DotOverlay";
import { FaBriefcase } from "react-icons/fa";4
import C from "@/assets/images/home-empower/C.png";
import { RxDotsHorizontal } from "react-icons/rx";
import empower1 from "@/assets/images/home-empower/empower1.png";
import empower2 from "@/assets/images/home-empower/empower2.png";
import empower3 from "@/assets/images/home-empower/empower3.png";
import empower4 from "@/assets/images/home-empower/empower4.png";
import empower5 from "@/assets/images/home-empower/empower5.png";
import empower6 from "@/assets/images/home-empower/empower6.png";

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
                xl:w-[40%] lg:w-1/2">
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
                <div className="px-5 h-[550px]
                xl:w-[55%] lg:w-1/2 lg:block md:hidden max-md:hidden relative">
                    <Image className="absolute right-20"
                        width={165}
                        height={166}
                         src={empower1} alt="empower1"/>
                    <Image className="absolute bottom-10 right-10"
                        width={177}
                        height={336}
                         src={empower2} alt="empower2"/>
                    <Image className="absolute left-[45%] -translate-x-1/2 top-[15%]"
                        width={230}
                        height={254}
                         src={empower3} alt="empower3"/>
                    <Image className="absolute left-[45%] -translate-x-1/2 bottom-0"
                        width={165}
                        height={166}
                         src={empower4} alt="empower4"/>
                    <Image className="absolute left-0 bottom-32"
                        width={196}
                        height={195}
                         src={empower5} alt="empower5"/>
                    <Image className="absolute top-[20%] left-20"

                        width={69}
                        height={72}
                         src={empower6} alt="empower6"/>
                    <div className="w-8 h-8 bg-gray-300 absolute rounded-full bottom-0 right-0" />
                </div>  
            </div>
        </div>
    )
}

export default EmpowerHome;