import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./WeatherHeaderAppTitle.css";

export const WeatherHeaderAppTitle = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"weather-header-app-title"}>
      <NavLink to={"/"}>
        <div className={"weather-header-app-title__button-back"}>
          <span>{t("authorized.weather.app-title.button-back")}</span>
        </div>
      </NavLink>
      <div className={"weather-header-app-title__title"}>
        <span>{t("authorized.weather.app-title.title")}</span>
      </div>
    </div>
  );
};
