import why1 from "@/assets/images/employer/filipino1.png";
import why2 from "@/assets/images/employer/filipino2.png";
import why3 from "@/assets/images/employer/filipino3.png";
import why4 from "@/assets/images/employer/filipino4.png";
import Image from "next/image";

const whyUsArr = [{
    num: "01",
    title: "Pre-Screened Talent",
    descr: "Save time and resources. All candidates are vetted by our HR experts before reaching your desk."
}, {
    num: "02",
    title: "Faster Recruitment",
    descr: "Fill roles quickly with our streamlined process that connects you to job-ready professionals."
}, {
    num: "03",
    title: "Dedicated HR Support",
    descr: "Our team manages applications, job postings, and candidate screening so you can focus on your business."
}, {
    num: "04",
    title: "Industry-Wide Expertise",
    descr: "From healthcare to IT, we cover 9 major industries with the right professionals for your needs."
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
                    <h2 className="text-3xl font-heading font-bold">Why Choose Us</h2>
                    <p className="text-gray-500">Your success depends on the right people. With Talentsourze, you gain a trusted partner that helps you build a strong team and grow your business with confidence.</p>
                    <div className="gap-2 
                    lg:flex
                    md:hidden
                    max-md:hidden">
                        <div className="flex flex-col gap-2">
                            <Image src={why1} alt="why img"/>
                            <Image src={why2} alt="why img"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Image src={why3} alt="why img"/>
                            <Image src={why4} alt="why img"/>
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
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="font-heading italic brand-text-blue font-bold">{list.num}</p>
                            </div>
                            <h3 className="font-heading font-semibold text-3xl">{list.title}</h3>
                            <p className="text-gray-500">{list.descr}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs;