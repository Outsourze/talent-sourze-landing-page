import why1 from "@/assets/images/employer/filipino1.png";
import why2 from "@/assets/images/employer/filipino2.png";
import why3 from "@/assets/images/employer/filipino3.png";
import why4 from "@/assets/images/employer/filipino4.png";
import Image from "next/image";

const whyUsArr = [{
    num: "01",
    title: "Pre-Vetted Talent",
    descr: "We handpick and screen every candidate — so you only meet professionals ready to deliver from day one."
}, {
    num: "02",
    title: "Fast, Hassle-Free Hiring",
    descr: "Our streamlined process connects you to qualified talent quickly, without the long wait or heavy admin."
}, {
    num: "03",
    title: "End-to-End Support",
    descr: "From sourcing and onboarding to HR and payroll, we manage the details so you can focus on growth."
}, {
    num: "04",
    title: "Expertise Across Industries",
    descr: "Whether you’re in mining, finance, marketing, IT, or healthcare — we’ve got the right people for the job."
}]

const ContactUs = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
            xl:px-0 xl:gap-20 
            lg:px-20 lg:gap-10 
            md:px-20 
            max-md:px-5 max-md:py-10"
        >
            <div className="flex items-stretch justify-between w-full gap-10
                lg:flex-row
                md:flex-col
                max-md:flex-col">
                <div className="flex flex-col gap-5
                    lg:w-[45%] md:w-full">
                    <h2 className="text-3xl font-heading font-bold">Why Choose Talent Sourze</h2>
                    <p className="text-gray-500">Your success starts with the right people — and we know where to find them. 
                         At Talent Sourze, we connect global businesses with skilled Filipino professionals who bring 
                        reliability, talent, and heart to every role. 
                    </p>
                    <div className="gap-2 
                    lg:flex
                    md:hidden
                    max-md:hidden">
                        <div className="flex flex-col gap-2">
                            <Image src={why4} alt="why img"/>
                            <Image src={why3} alt="why img"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Image src={why1} alt="why img"/>
                            <Image src={why2} alt="why img"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between 
                xl:w-[45%] 
                lg:w-1/2
                md:w-full md:flex-row
                max-md:w-full
                max-sm:flex-col max-sm:gap-3">
                    {whyUsArr.map((list, index) => (
                        <div key={index} className="flex flex-col gap-5 items-start md:w-[48%] max-sm:w-full">
                            <div className="bg-white py-5 px-6 rounded-lg shadow-md">
                                <p className="font-heading italic brand-text-blue font-bold md:text-2xl">{list.num}</p>
                            </div>
                            <h3 className="font-heading font-semibold text-2xl">{list.title}</h3>
                            <p className="text-gray-500">{list.descr}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs;