import { useTranslatei18n } from "hooks/useTranslatei18n";
import "./LanguageSwitcher.css";

import ruflag from "assets/images/flags/rus.png";
import enflag from "assets/images/flags/eng.png";

export const LanguageSwitcher = (props) => {
  const {
    toggleSwitcher,
    switchToRusLang,
    switchToEnLang,
  } = useTranslatei18n()

  return (
    <div className="language-switcher">
      <div className={"language-switcher__ru"} onClick={switchToRusLang}>
        <img src={ruflag} alt={""} />
        <span
          className={
            localStorage.getItem("_app-language") === "ru"
              ? "active-language-switcher"
              : "not-active-language-switcher"
          }
        >
          Ru
        </span>
      </div>

      <label className="language-switcher__switcher" htmlFor="LanguageSwitcher" >
        <input
          id="LanguageSwitcher"
          type="checkbox"
          checked={
            localStorage.getItem("_app-language") === "ru" ? false : true
          }
          onChange={toggleSwitcher}
        />
        <span className="language-switcher__slider-round"></span>
      </label>
      <div className={"language-switcher__en"} onClick={switchToEnLang}>
        <img src={enflag} alt={""} />
        <span
          className={
            localStorage.getItem("_app-language") === "en"
              ? "active-language-switcher"
              : "not-active-language-switcher"
          }
        >
          En
        </span>
      </div>
    </div>
  );
};
