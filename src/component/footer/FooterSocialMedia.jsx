import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const FooterSocialMedia = ({
    theme, 
    size
}) => {
    const socialMediaData = [{
        url: "/",
        icon: <FaFacebookF size={size === "normal" ? 14 : 24}/>
    }, {
        url: "/",
        icon: <FaInstagram size={size === "normal" ? 14 : 24}/>
    }, {
        url: "/",
        icon: <FaXTwitter size={size === "normal" ? 14 : 24}/>
    }, {
        url: "/",
        icon: <FaLinkedinIn size={size === "normal" ? 14 : 24}/>
    }]

    return (
        <div className="flex items-center gap-5">
            {socialMediaData.map((data, index) => (
                <div key={index} className={`${theme === "black" ? "text-white outline-white p-2 outline" : "text-black outline-black p-5 outline-2"}  rounded-full cursor-pointer`}>
                   {data.icon}
                </div>
            ))}
        </div>
    )
}

export default FooterSocialMedia;