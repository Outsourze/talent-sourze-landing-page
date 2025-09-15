import IntroductionCandidate from "@/component/candidate/Introduction";
import SectorList from "../../component/candidate/SectorList";
import WhyUs from "@/component/candidate/WhyChooseUs";

const Candidate= () => {
    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionCandidate />
            <WhyUs />
            <SectorList />
        </div>
    )
}

export default Candidate;