import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import en from "../public/locales/en/translation.json";
// import ru from "../public/locales/ru/translation.json";

const defaultLanguage = ["en"];
const availableLanguages = ["en", "ru"];

const options = {
  // order and from where user language should be detected
  order: ["navigator", "localStorage", "cookie"],

  // keys or params to lookup language from
  lookupCookie: "_app-language",
  lookupLocalStorage: "_app-language",

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка
  .use(LanguageDetector)
  // модуль инициализации
  .use(initReactI18next)
  .init({
    // Стандартный язык
    fallbackLng: defaultLanguage,
    debug: false,
    whitelist: availableLanguages,
    // Распознавание и кэширование языковых кук
    detection: options,
    interpolation: {
      escapeValue: false,
    },
    
    // resources: {
    //   en: { translation: en },
    //   ru: { translation: ru },
    // },
  });

export default i18n;
