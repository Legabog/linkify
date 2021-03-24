import { useTranslation } from "react-i18next";
import "./WeatherBodyPoweredBy.css";

export const WeatherBodyPoweredBy = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"weather-body-powered-by"}>
      <span>
        {t("authorized.weather.powered-by")}{" "}
        <a href="https://openweathermap.org/">Openweathermap</a>{" "}
        {t("authorized.weather.and")}{" "}
        <a href="https://www.openstreetmap.org/">Openstreetmap</a>.
      </span>
    </div>
  );
};
