import React from "react";
import { useTranslation } from "react-i18next";

export const BetterWorld = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-8 md:px-20 py-16">
      <div className="flex-1 max-w-lg">
        <h1 className="better-world-title leading-tight mb-6">
          <span className="text-[#0072BC]">{t("betterWorld.titleLine1")}</span>{" "}
          <span className="text-black">{t("betterWorld.titleLine2")}</span>
        </h1>
        <p className="better-w-first-text text-black mb-8 text-justify">
          {t("betterWorld.description")}
        </p>
        <div className="space-y-6">
          <div>
            <p className="metric-principal-txt font-bold text-[#0072BC]">50</p>
            <p className="metric-sec-txt uppercase text-sm text-[#0072BC] tracking-wider">{t("betterWorld.stats.countries")}</p>
          </div>
          <div>
            <p className="metric-principal-txt font-bold text-[#0072BC]">190.000+</p>
            <p className="metric-sec-txt uppercase text-sm text-[#0072BC] tracking-wider">{t("betterWorld.stats.employees")}</p>
          </div>
          <div>
            <p className="metric-principal-txt font-bold text-[#0072BC]">150</p>
            <p className="metric-sec-txt uppercase text-sm text-[#0072BC] tracking-wider">{t("betterWorld.stats.years")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
