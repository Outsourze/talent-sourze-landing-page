import IntroductionCandidate from "@/component/candidate/Introduction";
import JobListing from "../../component/candidate/JobListing";

const Candidate= () => {
    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionCandidate />
            <JobListing />
        </div>
    )
}

export default Candidate;