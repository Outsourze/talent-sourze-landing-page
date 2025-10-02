import CopyRight from "./Copyright";
import FooterIntro from "./FooterIntro";

const Footer = () => {
    return (
        <div className="flex flex-col bg-[#f5f5f5]">
            <FooterIntro />
            <CopyRight />
        </div>
    )
}

export default Footer;