import React from "react";

export const DigitalLovers = () => {

    return(
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full h-full px-6 md:px-20 pt-[200px] pb-16">
            <div className="w-full max-w-[900px]">
                <h1 className="text-black digi-title-style uppercase mb-4">
                    <span className="text-[#0072BC]">TheDigitalLovers</span>,<br />
                    <span>a movement of NTT DATA</span>
                </h1>
                <p className="text-black description-txt text-[16px] max-w-[708px] mx-auto mb-6">
                At NTT DATA we offer you the opportunity to grow professionally in a flexible, innovative,
                multicultural and collaborative environment. We have many opportunities that will help you grow in a
                comprehensive way, in addition to different career plans tailored to you. Check out our job offers in the
                technology sector and join our TheDigitalLovers community.
                </p>
                <div className="mx-auto bg-transparent text-[#0072BC] border border-[#0072BC] rounded-full w-[273px] h-[44px] flex items-center justify-center hover:bg-[#0072BC] hover:text-white cursor-pointer transition-colors duration-200">
                    <p className="text-center txt-button">Access our job offers</p>
                </div>
            </div>
        </div>
    )
}
