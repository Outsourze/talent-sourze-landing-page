import ContactUs from "@/component/employer/Contact-us";
import GetStarted from "@/component/employer/GetStarted";
import IntroductionEmployer from "@/component/employer/Introduction";

const Employer = () => {
    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionEmployer />
            <ContactUs />
            <GetStarted />
        </div>
    )
}

export default Employer;