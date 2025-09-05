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
        <div className="bg-[#F9F9FB]">
            <div className="py-15 flex flex-col gap-10 max-w-7xl m-auto 
                xl:px-0 lg:px-20 md:px-20 max-md:px-5 max-md:relative "
            >
                <div className="flex items-center justify-between">
                    <h2 className="font-jakarta text-5xl w-[40%]">Where talent meets opportunity.</h2>
                    <FooterSocialMedia 
                        size={"large"}
                        theme={"white"}
                    />
                </div>
                <div className="flex items-center justify-between">
                    {contactData.map((data, index) => (
                        <div key={index} className="flex items-center gap-5 px-15 py-3 bg-white rounded-full">
                            {data.icon}
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterIntro;