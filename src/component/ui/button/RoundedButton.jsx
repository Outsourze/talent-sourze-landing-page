import { useState } from "react";

const RoundedButton = ({
    children,
    style,
    isHoverDesignTrue,
    isHoverDesignFalse
}) => {
    const [isHover, setIsHover] = useState(false);


    return (
        <div 
            className={`${style} py-3 px-5 flex items-center gap-3 rounded-full duration-300 ${isHover ? isHoverDesignTrue : isHoverDesignFalse }`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {children}
        </div>
    )
}

export default RoundedButton;
