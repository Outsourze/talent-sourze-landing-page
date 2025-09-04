import ContactUs from "@/component/employer/Contact-us";
import ContactForm from "@/component/employer/ContactForm";
import IntroductionEmployer from "@/component/employer/Introduction";

const Employer = () => {
    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionEmployer />
            <ContactUs />
            <ContactForm />
        </div>
    )
}

export default Employer;