import React from "react";
import footerLog from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { LanguageSelector } from "./language_selector";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-[#060c2c] text-white px-8 py-10 text-sm z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
     
        <div className="flex flex-col gap-4">
          <img src={footerLog} alt="NTT Data" className="h-6 w-auto" />
          <div className="flex gap-4 text-xl">
            <FaInstagram  className="cursor-pointer"/>
            <FaLinkedin className="cursor-pointer"/>
            <FaTwitter className="cursor-pointer"/>
            <FaFacebook className="cursor-pointer"/>
            <FaYoutube className="cursor-pointer"/>
          </div>
          <div>
            <LanguageSelector />
          </div>
        </div>

  
        <div className="grid grid-cols-2 md:grid-cols-2 gap-y-2 gap-x-8 text-white/90">
          <a href="#">{t("footer.industries")}</a>
          <a href="#">{t("footer.news")}</a>
          <a href="#">{t("footer.services")}</a>
          <a href="#">{t("footer.about_us")}</a>
          <a href="#">{t("footer.products")}</a>
          <a href="#">{t("footer.careers")}</a>
        </div>
      </div>

      <hr className="border-t border-white/20 my-6" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/80">
        <p>{t("footer.copyright")}</p>
        <a href="#top" className="text-white font-semibold mt-4 md:mt-0 hover:underline">
        {t("footer.back_to_top")} ↑
        </a>
      </div>
    </footer>
  )
}


