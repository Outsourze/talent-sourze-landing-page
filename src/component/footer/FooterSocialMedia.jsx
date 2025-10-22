import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { useMediaQuery } from "@/utility/useMediaQuery";
import Link from "next/link";

const FooterSocialMedia = ({
    theme, 
    size
}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 468px)");

    const socialMediaData = [{
        url: "https://www.facebook.com/talentsourze",
        icon: 
        <FaFacebookF 
            size={isMobile ? 10 : 24}
        />
    }, {
        url: "https://www.instagram.com/talentsourzeglobal/#",
        icon: 
        <FaInstagram 
            size={isMobile ? 10 : 24}
        />
    }, {
        url: "https://www.tiktok.com/@talentsourze",
        icon: 
        <FaTiktok  
            size={isMobile ? 10 : 24}
        />
    }, {
        url: "https://www.linkedin.com/company/talentsourze/",
        icon: 
        <FaLinkedinIn 
            size={isMobile ? 10 : 24}
        />
    }]

    return (
        <div className="flex items-center gap-5 max-md:gap-2">
            {socialMediaData.map((data, index) => (
                <Link 
                    href={data.url} 
                    key={index} 
                    className={`${theme === "black" ? "text-white outline-white p-2 max-md:p-[5px] outline" : "text-black outline-black lg:p-5 md:p-3 max-md:p-2 outline-2"}  rounded-full cursor-pointer brand-bg-blue`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                   {data.icon}
                </Link>
            ))}
        </div>
    )
}

export default FooterSocialMedia;