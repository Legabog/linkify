import { useTranslation } from "react-i18next";
import "./WeatherBodySecondaryInfo2.css";

export const WeatherBodySecondaryInfo2 = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"weather-body-secondary-info-2-wrapper"}>
      <div className={"weather-body-secondary-info-2"}>
        <div className={"weather-body-secondary-info-2_max-temperature"}>
          <div className={"weather-body-secondary-info-2__value"}>
            <span>
              {props.weatherToday !== null
                ? props.weatherToday.main.humidity
                : null}
              &nbsp;%
            </span>
          </div>

          <div className={"weather-body-secondary-info-2__description"}>
            <span>
              {t("authorized.weather.weather-body-secondary-info-2.item-1")}
            </span>
          </div>
        </div>
        <div className={"weather-body-secondary-info-2_min-temperature"}>
          <div className={"weather-body-secondary-info-2__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.main.pressure / 1.333)
                : null}
              &nbsp;
              {t(
                "authorized.weather.weather-body-secondary-info-2.item-2-units"
              )}
            </span>
          </div>
          <div className={"weather-body-secondary-info-2__description"}>
            <span>
              {t("authorized.weather.weather-body-secondary-info-2.item-2")}
            </span>
          </div>
        </div>
        <div className={"weather-body-secondary-info-2_feels-like-temperature"}>
          <div className={"weather-body-secondary-info-2__value"}>
            <span>
              {props.weatherToday !== null
                ? Math.round(props.weatherToday.wind.speed)
                : null}
              &nbsp;
              {t(
                "authorized.weather.weather-body-secondary-info-2.item-3-units"
              )}
            </span>
          </div>
          <div className={"weather-body-secondary-info-2__description"}>
            <span>
              {t("authorized.weather.weather-body-secondary-info-2.item-3")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
