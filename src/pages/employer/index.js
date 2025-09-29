import GetStarted from "@/component/employer/GetStarted";
import IntroductionEmployer from "@/component/employer/Introduction";
import WhyUs from "@/component/employer/WhyChooseUs";
import ContactForm from "@/component/employer/ContactForm";
import Modal from "@/component/ui/modal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Employer = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="flex flex-col 
        lg:gap-20 md:gap-10 max-md:gap-10 max-sm:gap-5">
            <IntroductionEmployer />
            <WhyUs />
            <GetStarted setIsFormOpen={setIsFormOpen}/>

            {isFormOpen && (
                <Modal>
                  <ContactForm 
                    isFormOpen={isFormOpen}
                    setIsFormOpen={setIsFormOpen}
                  />
                </Modal>
            )}
            <ToastContainer 
              position="bottom-right"
            />
        </div>
    )
}

export default Employer;