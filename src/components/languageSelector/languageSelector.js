import React from "react";
import { useTranslation } from "react-i18next";
import { Language } from "./languageSelectorStyles";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
    } else if (i18n.language === "fr") {
      i18n.changeLanguage("en");
    }
  };
  return (
      <Language onClick={() => changeLanguage()} />
  );
};

export default LanguageSelector;
