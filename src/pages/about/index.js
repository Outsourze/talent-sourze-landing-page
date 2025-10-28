import FounderSection from "@/component/about/about-founder";
import IntroductionAbout from "@/component/about/Introduction";
import SEO from "@/utility/useSeo";

const About = () => {
    return (
        <>
            <SEO
              title="Talentsourze | Hire Skilled Overseas Talent at Lower Cost"
              description="Scale your business with top offshore professionals from the Philippines. Save up to 70% on labor costs while maintaining quality and efficiency."
              url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
            />
            <div className="flex flex-col 
            lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
                <IntroductionAbout />
                <FounderSection />
            </div>
        </>
    )
}

export default About;