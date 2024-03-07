import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import ar from "./ar";
import { defaultLang } from "./allLanguage";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translations: en },
      ar: { translations: ar },
    },
    lng: localStorage.getItem("i18next") || defaultLang.value,
    fallbackLng: defaultLang.value,
    ns: ["translations"],
    defaultNS: "translations",
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
