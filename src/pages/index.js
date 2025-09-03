import IntroductionHome from "@/component/home/Introduction";
import SEO from "@/utility/useSeo";
import EmpowerHome from "@/component/home/Empower";
import ChooseYourPathHome from "@/component/home/ChooseYourPath";

export default function Home() {
  return (
    <>
      {/* <SEO
        title="Outsourze | Hire Skilled Overseas Talent at Lower Cost"
        description="Scale your business with top offshore professionals from the Philippines. Save up to 70% on labor costs while maintaining quality and efficiency."
        url={`${process.env.NEXT_PUBLIC_BASE_URL}`}
      /> */}
      <div className="flex flex-col 
      lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
        {/* hero section container */}
        <IntroductionHome />
        <EmpowerHome />
        <ChooseYourPathHome />
      </div>
    </>
  );
}
