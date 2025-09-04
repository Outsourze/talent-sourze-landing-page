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
            <div className="px-10 flex flex-col items-center w-full gap-10">
                <div className="gap-5 flex flex-col w-full">
                    <h1 className="text-6xl font-heading font-extrabold brand-text-gray">Contact us</h1>
                    <p className="text-gray-500">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    {contactData.map((data, index) => (
                        <div className="flex items-start gap-5">
                            <div className="flex p-3 rounded-full bg-white">
                                {data.icon}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl font-extrabold font-heading brand-text-gray">{data.title}</h3>
                                <div className="text-gray-500 text-lg">
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