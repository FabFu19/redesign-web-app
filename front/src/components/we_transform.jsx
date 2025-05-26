import React from "react";
import { useTranslation } from "react-i18next";

export const WeTransform = () => {
  const { t } = useTranslation();
  return (
    <div className="relative z-10 flex flex-col justify-center items-center text-center h-full w-full px-6 md:px-20 py-16">
      <div className="max-w-3xl">
        <h1 className="we-transform-title text-3xl md:text-5xl leading-tight mb-6">
          <span className="text-[#0072BC]">{t("weTransform.titleLine1")}</span>{" "}
          <span className="text-black">{t("weTransform.titleLine2")}, </span>
          <span className="text-black">{t("weTransform.titleLine3")}</span>
        </h1>
        <p className="text-black mb-8 description-txt">
          {t("weTransform.description")}
        </p>
        <iframe
          className="rounded-xl shadow-xl w-full max-w-2xl aspect-video ms-auto me-auto"
          src="https://www.youtube.com/embed/IWs74RjRxgI"
          title="nttdata-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
