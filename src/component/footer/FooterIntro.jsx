import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import TalentsourzeLogo from "@/assets/logo/talentsourze-logo-text.svg";
import { GoArrowUpRight } from "react-icons/go";

const contactData = [{
    text: "Book An Appointment",
    icon: <FaCalendarAlt />
}, {
    text: "+63 123 456 7890",
    icon: <IoCallOutline />
}, {
    text: "talentsourze email",
    icon: <MdOutlineMail />
}]

const FooterIntro = () => {
    return (
        <div className="">
            <div className="py-15 flex justify-between gap-10 max-w-7xl m-auto 
                xl:px-0 
                lg:px-20 lg:flex-row 
                md:px-20 md:flex-col
                max-md:px-5 max-md:relative max-md:flex-col"
            >
                <div className="flex flex-col gap-5 text-[#1C1C1C]
                lg:w-[70%] md:w-full max-md:w-full">
                    <Link href={"/"} aria-label="Outsouzed Home">
                        <TalentsourzeLogo className="lg:w-42 md:w-28 max-md:w-24"/>
                    </Link>
                    <h2 className="text-4xl font-heading font-bold">Join us in shaping the future of AI as it evolve into a reality</h2>
                    <div className="flex items-center gap-5">
                        <Link className="flex gap-1 items-center px-5 py-2 outline rounded-4xl" href={"/"}><span>Employer</span> <GoArrowUpRight /></Link>
                        <Link className="flex gap-1 items-center px-5 py-2 outline rounded-4xl" href={"/"}><span>Candidate</span> <GoArrowUpRight /></Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-[#1C1C1C] font-semibold
                lg:w-[20%]
                md:w-full 
                max-md:w-full">
                    <h3 className="font-heading text-2xl font-extrabold">GET IN TOUCH</h3>
                    <p>+63 968 372 4410</p>
                    <p>HELLO@TALENTSOURZE.COM</p>
                    <div>
                        <h4 className="font-heading font-extrabold">OUTSOURZE INC</h4>
                        <p className="leading-5"> Inc Knightsbridge Level 2, 392 B. Valdez Street, Poblacion, Makati,Metro Manila, Philippines, 1201</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterIntro;