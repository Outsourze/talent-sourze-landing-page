import Image from "next/image";
import hero1 from "@/assets/images/candidate/meeting.png";
import calendar from "@/assets/images/candidate/Calendar 1.png";
import map from "@/assets/images/candidate/Map Pin.png";
import medal from "@/assets/images/candidate/Medal.png";
import { useMediaQuery } from "@/utility/useMediaQuery";

const whyUsOptionsData = [{
    icon: medal,
    title: "Best Career Matches",
    descr: "We connect you with opportunities that align with your skills and future goals."
}, {
    icon: calendar,
    title: "Quick Hiring Process",
    descr: "Apply today and get matched with employers faster than traditional job searches."
}, {
    icon: map,
    title: "Opportunities Everywhere",
    descr: "Discover roles across industries and locations, giving you the flexibility to grow your career."
}]

const WhyUs = () => {
    const isDesktop = useMediaQuery("(min-width: 1280px)");
    const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
    const isMobile = useMediaQuery("(max-width: 767px)");

    return (
        <div className="max-w-7xl w-full py-10 m-auto flex items-center justify-between
            xl:px-0 xl:gap-20
            lg:px-20 lg:gap-10 lg:pt-14
            md:px-20 md:pt-12 md:gap-10
            max-md:px-5 max-md:py-10"
        >
            <div className="px-5 flex 
                xl:w-[40%] 
                lg:w-[40%] 
                md:w-[40%] md:flex
                max-md:w-1/2 max-md:hidden">
              <div className="relative inline-block">
                {/* Overlay (shadow card) */}
                <div
                  className="absolute bg-[#D9D9D980] xl:rounded-[2.5rem] md:rounded-[2rem] max-md:rounded-[1rem] max-sm:rounded-[0.8rem] z-0 translate-x-[-1rem] translate-y-[-1rem]
                            xl:-right-25 xl:-top-3 xl:left-15 xl:bottom-3
                            lg:-right-25 lg:-top-3 lg:left-15 lg:bottom-3
                            md:-right-12 md:top-0 md:left-10 md:bottom-2"
                />
                {/* Image */}
                <Image
                  width={isDesktop ? 423 : isLaptop ? 380 : isTablet ? 300 : 200}
                  height={isDesktop ? 551 : isLaptop ? 511 : isTablet ? 420 : 300}
                  src={hero1}
                  alt="hero1"
                  className="rounded-2xl relative z-10"
                />
                <div className="absolute z-20 bg-[#0000006b] backdrop-blur-sm rounded-xl overflow-hidden 
                lg:-bottom-5 lg:-right-[40%]
                md:-bottom-5 md:-right-[40%]">
                    <p className="text-white font-bold font-heading 
                        xl:text-3xl xl:p-8
                        lg:text-2xl lg:p-5
                        md:text-base md:p-3">Your career partner</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col 
                lg:w-1/2 
                md:w-[60%] md:gap-5
                max-sm:gap-1">
                <h4 className="font-semibold brand-text-blue
                    lg:text-3xl md:text-xl max-md:text-lg">Way Choose Us?</h4>
                <h2 className="font-heading font-extrabold
                    lg:text-5xl md:text-3xl max-md:text-2xl">Plan Your Career With Us</h2>
                <div className="flex flex-col gap-5 max-sm:mt-5">
                    {whyUsOptionsData.map((data, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <div className="p-4 bg-white rounded-md">
                                <Image className="w-10 h-10" src={data.icon} alt={data.title}/>
                            </div>
                            <div className="flex flex-col">
                                <h5 className="font-bold
                                    lg:text-2xl md:text-xl max-md:text-lg">{data.title}</h5>
                                <p className="brand-text-gray lg:text-base md:text-sm max-md:text-xs">{data.descr}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default WhyUs;