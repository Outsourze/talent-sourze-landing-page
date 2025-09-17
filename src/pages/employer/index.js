import GetStarted from "@/component/employer/GetStarted";
import IntroductionEmployer from "@/component/employer/Introduction";
import WhyUs from "@/component/employer/WhyChooseUs";

const Employer = () => {

    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionEmployer />
            <WhyUs />
            <GetStarted/>
        </div>
    )
}

export default Employer;