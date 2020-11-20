import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en/en.json";
import fr from "./translations/fr/fr.json";

const resources = {
  en,
  fr,
};

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "fr",

  resources,

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
