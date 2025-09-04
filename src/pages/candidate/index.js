import IntroductionCandidate from "@/component/candidate/Introduction";
import SectorList from "../../component/candidate/SectorList";

const Candidate= () => {
    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionCandidate />
            <SectorList />
        </div>
    )
}

export default Candidate;