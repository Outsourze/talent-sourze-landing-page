import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const contactData = [{
    title: "Call us",
    descr: (
        <>
            <p>+1-234-567-7890</p>
            <p>+1-234-567-7890</p>
        </>
    ),
    icon: <MdCall size={22} className="brand-text-blue"/>
}, {
    title: "Email us",
    descr: (
        <>
            <p>taletsourze@email</p>
            <p>talentsourze_hr@emal</p>
        </>
    ),
    icon: <MdOutlineMail size={22} className="brand-text-blue"/>
}, {
    title: "Visit us",
    descr: (
        <>
            <p>Makati,Metro Manila,</p>
            <p>Philippines, 1201</p>
        </>
    ),
    icon: <FaLocationDot size={22} className="brand-text-blue"/>
}]

const ContactUs = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="flex flex-col items-center w-full gap-10
            xl:px-10 md:px-5 max-md:px-5">
                <div className="gap-5 flex flex-col w-full">
                    <h1 className="
                    font-heading font-[900] brand-text-gray 
                    xl:text-6xl xl:leading-16
                    lg:text-4xl lg:leading-12 
                    md:text-4xl max-md:text-4xl">Contact us</h1>
                    <p className="text-gray-500
                    md:text-lg max-md:text-base">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                </div>
                <div className="flex justify-between w-full 
                md:flex-row md:items-center  
                max-md:flex-col max-md:items-start max-md:gap-5">
                    {contactData.map((data, index) => (
                        <div className="flex items-start gap-5 lg:flex-row md:flex-col md:items-center max-md:items-start">
                            <div className="flex p-3 rounded-full bg-white">
                                {data.icon}
                            </div>
                            <div className="flex gap-3 md:flex-col max-md:flex-col">
                                <h3 className="text-2xl font-extrabold font-heading brand-text-gray lg:text-left md:text-center">{data.title}</h3>
                                <div className="text-gray-500 text-lg flex md:flex-col max-md:flex-row max-md:gap-3 max-sm:gap-2 max-sm:text-sm">
                                    {data.descr}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs;