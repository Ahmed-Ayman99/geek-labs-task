import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./i18n/en/translation.json";
import arTranslation from "./i18n/ar/translation.json";

const order = [
  "cookie",
  "htmlTag",
  "localStorage",
  "navigator",
  "path",
  "subdomain",
];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    detection: {
      order,
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
  });

export default i18n;
