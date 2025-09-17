import nurse from "@/assets/images/home-empower/nurse.png";
import doctor from "@/assets/images/home-empower/doctor.png";
import engr from "@/assets/images/home-empower/engr.png";
import driver from "@/assets/images/home-empower/driver.png";
import farmer from "@/assets/images/home-empower/farmer.png";
import polygon from "@/assets/images/home-empower/Polygon 2.png";
import Image from "next/image";

const EmpowerHero = () => {
    return (
        <div className="
        xl:w-[55%] h-[550px] lg:w-[60%] lg:block md:hidden max-md:hidden">
            <div className="relative w-full h-full">
                <Image width={55} height={55} className="absolute top-[30%] left-16" src={polygon} alt="polygon"/>
                <Image width={196} height={196} className="absolute -left-5 bottom-20" src={nurse} alt="nurse" />
                <Image width={230} height={230} className="absolute left-[43%] top-[40%] -translate-y-1/2 -translate-x-1/2 " src={doctor} alt="doctor" />
                <Image width={165} height={165} className="absolute bottom-0  left-[45%] -translate-x-1/2" src={driver} alt="driver" />
                <Image width={165} height={166} className="absolute top-0 right-15" src={engr} alt="engr" />
                <Image width={177} height={336} className="absolute bottom-5 right-10" src={farmer} alt="farmer" />
                <div className="bg-[#D9D9D9] w-8 h-8 rounded-full absolute bottom-0 right-0"></div>
            </div>
        </div>
    )
}

export default EmpowerHero;