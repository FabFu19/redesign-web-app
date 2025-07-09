import React from "react";
import { useTranslation } from "react-i18next";

export const DigitalLovers = () => {

    const { t } = useTranslation();
    return(
        <div className="relative z-10 flex flex-col justify-center items-center text-center w-full h-full sm:pt-8, px-6 md:px-20 pt-[230px] pb-16">
            <div className="w-full max-w-[900px]">
                <h1 className="text-black digi-title-style uppercase mb-4">
                    <span className="text-[#0072BC]">{t("digitalLovers.titleLine1")}</span>,<br />
                    <span>{t("digitalLovers.titleLine2")}</span>
                </h1>
                <p className="text-black description-txt text-[16px] max-w-[708px] mx-auto mb-6">
                    {t("digitalLovers.description")}
                </p>
                <div className="mx-auto bg-transparent text-[#0072BC] border border-[#0072BC] rounded-full w-[273px] h-[44px] flex items-center justify-center hover:bg-[#0072BC] hover:text-white cursor-pointer transition-colors duration-200">
                    <p className="text-center txt-button"> {t("digitalLovers.cta")}</p>
                </div>
            </div>
        </div>
    )
}
