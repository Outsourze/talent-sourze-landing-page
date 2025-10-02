import { useState } from "react";

const BorderButton = ({
    children,
    style
}) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div 
            className={`${style} flex items-center gap-2 border-[1.5px] border-[#18181B] rounded-md px-7 py-4 ${isHover ? "bg-black duration-300 text-white" : "brand-text-gray "}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {children}
        </div>
    )
}

export default BorderButton;
