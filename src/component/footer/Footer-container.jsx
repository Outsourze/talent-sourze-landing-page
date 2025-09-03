import CopyRight from "./copyright";
import FooterIntro from "./Footer-intro";

const Footer = () => {
    return (
        <div className="flex flex-col">
            <FooterIntro />
            <CopyRight />
        </div>
    )
}

export default Footer;