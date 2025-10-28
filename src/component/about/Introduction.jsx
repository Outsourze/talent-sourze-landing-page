import Image from "next/image";
import about from "@/assets/images/about/about.jpg";
import { useMediaQuery } from "@/utility/useMediaQuery";

const IntroductionAbout = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  return (
    <div
      className="max-w-7xl w-full py-10 m-auto flex flex-col items-center justify-between
      xl:px-0 xl:gap-20 xl:pt-20
      lg:px-20 lg:gap-10 lg:pt-20
      md:px-20 md:pt-14
      max-md:px-5 max-md:py-12"
    >
      <div className="flex items-center w-full justify-between max-md:gap-6 max-md:flex-col">
        {/* LEFT CONTENT */}
        <div
          className="flex flex-col items-start text-left
          lg:gap-6 lg:w-1/2
          md:gap-4 md:w-full
          max-md:gap-4 max-md:w-full max-md:items-center max-md:justify-center"
        >
          <h1
            className="font-heading text-gray-900 font-extrabold
            xl:text-7xl xl:leading-18
            lg:text-6xl lg:leading-14
            md:text-5xl md:leading-10
            max-md:text-4xl max-md:leading-8"
          >
            About <span className="brand-text-blue">Talent Sourze</span>
          </h1>

          <p className="text-gray-500 lg:text-lg md:text-base max-md:text-sm max-sm:text-center">
            At <strong>Talent Sourze</strong>, we believe Filipino professionals
            deserve a global stage. We’re a recruitment and outsourcing partner
            that connects skilled talent from the Philippines with companies
            around the world — building relationships rooted in trust, culture,
            and excellence.
          </p>

          <p className="text-gray-500 lg:text-lg md:text-base max-md:text-sm max-sm:text-center">
            Founded by a team passionate about empowering both people and
            businesses, Talent Sourze makes hiring across borders simple and
            human. We handle the end-to-end process — from sourcing and
            screening to onboarding and HR support — so companies can scale
            confidently, and professionals can grow meaningful, international
            careers.
          </p>

          <p className="text-gray-500 lg:text-lg md:text-base max-md:text-sm max-sm:text-center">
            Whether you’re an employer building a reliable global team or a
            professional ready to take your career to the next level, we’re here
            to make that journey seamless. From the Philippines to the world —{" "}
            <strong>we bridge ambition and opportunity.</strong>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="px-5 justify-end xl:w-[40%] lg:w-1/2 lg:flex md:hidden max-md:hidden">
          <div className="relative inline-block">
            {/* Overlay Shadow */}
            <div
              className="absolute inset-0 bg-[#D9D9D980] xl:rounded-[2.5rem] md:rounded-[2rem] max-md:rounded-[1rem]
                xl:translate-x-[-2rem] xl:translate-y-[-2rem]
                lg:translate-x-[-1.5rem] lg:translate-y-[-1.5rem]
                md:translate-x-[-1rem] md:translate-y-[-1rem]
                max-md:translate-x-[-1rem] max-md:translate-y-[-1rem] z-0"
            />
            {/* Image */}
            <Image
              width={isDesktop ? 423 : isLaptop ? 380 : isTablet ? 300 : 250}
              height={isDesktop ? 551 : isLaptop ? 511 : isTablet ? 420 : 350}
              src={about}
              alt="about us"
              className="rounded-2xl relative z-10 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionAbout;
