import SearchIcon from "@material-ui/icons/Search";
import { useInput } from "hooks/useInput";
import "./WelcomeSearchSection.css";
import { useTranslation } from "react-i18next";

export const WelcomeSearchSection = (props) => {
  const { t } = useTranslation()
  const [value, ref, changeHandler, , focusHandler, blurHandler] = useInput("");

  return (
    <div className={"welcome-search-section__wrapper"}>
      <div className={"welcome-search-section"}>
        <div className={"welcome-search-section__description-main"}>
          <span>{t("authorized.welcome.search-section.main")}</span>
        </div>
        <div className={"welcome-search-section__description-secondary"}>
          <span>{t("authorized.welcome.search-section.secondary")}</span>
        </div>
        <div className={"welcome-search-section__input"}>
          <SearchIcon onClick={focusHandler} />
          <input
            type="text"
            ref={ref}
            value={value}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={blurHandler}
            id="welcome-component-input"
            placeholder={t("authorized.welcome.search-section.input-placeholder")}
          />
        </div>
      </div>
    </div>
  );
};
