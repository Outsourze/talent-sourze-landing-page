import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { useMediaQuery } from "@/utility/useMediaQuery";

const FooterSocialMedia = ({
    theme, 
    size
}) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const isMobile = useMediaQuery("(max-width: 468px)");

    const socialMediaData = [{
        url: "/",
        icon: 
        <FaFacebookF 
            size={isMobile ? 10 : 24}
        />
    }, {
        url: "/",
        icon: 
        <FaInstagram 
            size={isMobile ? 10 : 24}
        />
    }, {
        url: "/",
        icon: 
        <FaXTwitter 
            size={isMobile ? 10 : 24}
        />
    }, {
        url: "/",
        icon: 
        <FaLinkedinIn 
            size={isMobile ? 10 : 24}
        />
    }]

    return (
        <div className="flex items-center gap-5 max-md:gap-2">
            {socialMediaData.map((data, index) => (
                <div key={index} className={`${theme === "black" ? "text-white outline-white p-2 max-md:p-[5px] outline" : "text-black outline-black lg:p-5 md:p-3 max-md:p-2 outline-2"}  rounded-full cursor-pointer brand-bg-blue`}>
                   {data.icon}
                </div>
            ))}
        </div>
    )
}

export default FooterSocialMedia;