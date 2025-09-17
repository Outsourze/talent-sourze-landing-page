import Image from "next/image";
import filipino1 from "@/assets/images/employer/filipino1.png";
import filipino2 from "@/assets/images/employer/filipino2.png";
import filipino3 from "@/assets/images/employer/filipino3.png";
import filipino4 from "@/assets/images/employer/filipino4.png";


const WhyChooseUsData = [{
    num: 1,
    title: "Pre-Screened Talent",
    descr: "Save time and resources. All candidates are vetted by our HR experts before reaching your desk.",
}, {
    num: 2,
    title: "Faster Recruitment",
    descr: "Fill roles quickly with our streamlined process that connects you to job-ready professionals.",
}, {
    num: 3,
    title: "Dedicated HR Support",
    descr: "Our team manages applications, job postings, and candidate screening so you can focus on your business.",
}, {
    num: 4,
    title: "Industry-Wide Expertise",
    descr: "From healthcare to IT, we cover 9 major industries with the right professionals for your needs.",
}]

const WhyUs = () => {
    return (
        <div className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
             xl:px-0 xl:gap-20 
             lg:px-20 lg:gap-10 
             md:px-20 
             max-md:px-5 max-md:py-10"
         >
            <div className="flex items-start justify-between w-full gap-10">
                <div className="w-[40%] flex flex-col gap-3">
                    <h2 className="font-heading font-bold text-4xl brand-text-gray">Why Choose Us</h2>
                    <p className="text-gray-500">Your success depends on the right people. With Talentsourze, you gain a trusted partner that helps you build a strong team and grow your business with confidence.</p>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-2">
                            <Image src={filipino4}/>
                            <Image src={filipino3}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Image src={filipino1}/>
                            <Image src={filipino2}/>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] flex flex-wrap gap-y-14 justify-between">
                    {WhyChooseUsData.map((data, index) => (
                        <div key={index} className="w-[45%] flex flex-col gap-5 items-start">
                            <div className="rounded-sm bg-white p-5">
                                <p className="font-heading italic text-2xl font-bold brand-text-blue">{`0${data.num}`}</p>
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold text-2xl">{data.title}</h4>
                                <p className="text-gray-500">{data.descr}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyUs;