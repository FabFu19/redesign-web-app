import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-selector flex gap-2">
      <button onClick={() => handleLanguageChange("es")}>🇪🇸</button>
      <button onClick={() => handleLanguageChange("en")}>🇬🇧</button>
      <button onClick={() => handleLanguageChange("fr")}>🇫🇷</button>
      <button onClick={() => handleLanguageChange("de")}>🇩🇪</button>
      <button onClick={() => handleLanguageChange("jp")}>🇯🇵</button>
    </div>
  );
};
