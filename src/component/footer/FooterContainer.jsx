import CopyRight from "./Copyright";
import FooterIntro from "./FooterIntro";

const Footer = () => {
    return (
        <div className="flex flex-col bg-[#F8F8F8]">
            <FooterIntro />
            <CopyRight />
        </div>
    )
}

export default Footer;