import React from "react";
import '../styles/home.css';
import { useTranslation } from "react-i18next";

export const ANewEra = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="home-text w-full min-h-screen flex flex-col justify-center items-center z-10">
                <h1 className="home-principal-title text-white z-10 mt-auto mb-auto">{t("aNewEra.title")}</h1>
                <div className="flex w-full justify-center mb-8 z-10">
                    <p className="home-text-scroll animate-bounce text-white">{t("aNewEra.subtitle")}</p>
                </div>
            </div>
        </>
        
    )
}
