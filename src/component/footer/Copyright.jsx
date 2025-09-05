import FooterSocialMedia from "./FooterSocialMedia";


const CopyRight = () => {
    return (
        <div className="bg-black">
            <div className="py-4 max-w-7xl m-auto 
                xl:px-0 lg:px-20 md:px-20 max-md:px-5 max-md:relative ">
                <div className="flex items-center justify-between py-5">
                    <p className="text-[#BB9393] max-md:text-xs">Talentsourze - 2025 All right reserved.</p>
                    <FooterSocialMedia theme={"black"} size={"normal"}/>
                </div>
            </div>
        </div>
    )
}

export default CopyRight;