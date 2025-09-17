import FooterSocialMedia from "./FooterSocialMedia";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

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
            <div className="py-15 flex flex-col gap-10 max-w-7xl m-auto 
                xl:px-0 lg:px-20 md:px-20 max-md:px-5 max-md:relative "
            >
                <div className="flex items-center justify-between 
                lg:flex-row lg:text-left 
                md:flex-col md:gap-5 md:text-center
                max-md:flex-col max-md:gap-5 max-md:text-center">
                    <h2 className="font-jakarta
                    lg:w-[40%] lg:text-5xl  
                    md:w-full md:text-4xl max-md:text-2xl ">Where talent meets opportunity.</h2>
                    <FooterSocialMedia 
                        size={"large"}
                        theme={"white"}
                    />
                </div>
                <div className="flex items-center justify-between
                lg:gap-0 
                md:gap-5
                max-md:flex-col max-md:gap-5">
                    {contactData.map((data, index) => (
                        <div key={index} className="flex items-center gap-5 py-3 bg-white rounded-full
                        lg:px-15 md:px-5 max-md:w-4/5 max-md:justify-center">
                            {data.icon}
                            <p className="lg:text-base md:text-sm ">{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterIntro;