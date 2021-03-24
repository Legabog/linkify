import { useTranslation } from "react-i18next";

export const useTranslatei18n = () => {
  const { i18n } = useTranslation();

  const switchToRusLang = () => {
    if (localStorage.getItem("_app-language") === "en") {
      i18n.changeLanguage("ru");
    }
  };

  const switchToEnLang = () => {
    if (localStorage.getItem("_app-language") === "ru") {
      i18n.changeLanguage("en");
    }
  };

  const toggleSwitcher = () => {
    if (localStorage.getItem("_app-language") === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };

  return { toggleSwitcher, switchToRusLang, switchToEnLang };
};
