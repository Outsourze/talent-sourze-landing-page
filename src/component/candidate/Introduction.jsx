import DotOverlay from "../ui/DotOverlay";
import { SiGoogleanalytics } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Image from "next/image";
import animatatedProfile1 from "@/assets/images/employer/animated-profile1.png";
import animatatedProfile2 from "@/assets/images/employer/animated-profile2.png";
import animatatedProfile3 from "@/assets/images/employer/animated-profile3.png";
import outlineInside from "@/assets/images/employer/outline-inside.png";
import outlineOutside from "@/assets/images/employer/outline-outside.png";

const IntroductionCandidate= () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="px-10 flex items-center w-full justify-between">
                <div className="w-1/2 flex flex-col gap-10">
                    <h1 className="text-7xl font-heading font-[900] leading-16">Candidate</h1>
                    <p className="text-lg">Your talent deserves the right platform. Discover roles, grow your skills, and unlock your potential with Talentsourze.</p>
                </div>
                <div className="px-5 w-[40%]">
                    <div className="relative w-full">
                        <div className="w-full h-[450px] relative overflow-hidden -z-30">
                            <DotOverlay color={"#E4E4E7"}/>
                        </div>
                        <div className="bg-white absolute top-10 -left-10 flex flex-col items-center gap-3 py-5 px-12 border-1 border-gray-200 rounded-lg">
                            <div className="p-5 rounded-full brand-bg-blue">
                                <SiGoogleanalytics size={25}/>
                            </div>
                            <h4 className="text-4xl font-semibold brand-text-gray">158</h4>
                            <p className="text-gray-500">Projects</p>
                        </div>
                        <div className="bg-white absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col gap-5 items-center py-5 px-7 border-1 border-gray-200 rounded-lg">
                            <div className="flex items-center gap-5 border-b border-b-gray-300 pb-5">
                                <div className="bg-[#B63F00] p-3 rounded-full">
                                    <FaStar size={25}/>
                                </div>
                                <p className="font-semibold whitespace-nowrap text-lg brand-text-gray">Task Completed</p>
                                <p className="brand-text-gray text-xl font-semibold">08</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="flex items-center gap-3">
                                    <FaRegComment /> 
                                    <p className="text-xs ">3 comments</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaLink />
                                    <p className="text-xs ">cubexdesign.fig</p> 
                                </div>
                            </div>
                        </div>
                        <div className="bg-white absolute -top-5 -right-2 flex flex-col gap-7 items-start py-10 px-7 border-1 border-gray-200 rounded-lg">
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-500">Design System</p>
                                <h3 className="text-2xl font-semibold">Team Meeting</h3>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[30px] h-[30px] bg-amber-50 rounded-full overflow-hidden flex items-center justify-center">
                                    <Image width={30} height={30} src={animatatedProfile1} alt="profile image"/>
                                </div>
                                <div className="w-[30px] h-[30px] bg-amber-50 rounded-full overflow-hidden flex items-center justify-center relative right-1">
                                    <Image width={30} height={30} src={animatatedProfile2} alt="profile image 2"/>
                                </div>
                                <div className="w-[30px] h-[30px] bg-amber-50 rounded-full overflow-hidden flex items-center justify-center relative right-2">
                                    <Image width={30} height={30} src={animatatedProfile3} alt="profile image 3"/>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 outline outline-gray-200 p-2 rounded-full">
                                <div className="brand-bg-blue px-6 py-2 rounded-4xl ">
                                    <MdCall size={20} />
                                </div>
                                <p className="font-medium font-source tracking-tighter text-sm pr-5">Swipe to Call</p>
                            </div>
                            <Image className="absolute top-0 right-0" width={65} height={65} src={outlineInside} alt="outlineInside"/>
                            <Image className="absolute top-0 right-0" width={45} height={45} src={outlineOutside} alt="outlineOutside"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroductionCandidate;