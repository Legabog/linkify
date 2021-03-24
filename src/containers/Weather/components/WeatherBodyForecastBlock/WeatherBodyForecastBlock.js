import _ from "lodash/core";
import { useTranslation } from "react-i18next";
import "./WeatherBodyForecastBlock.css";

import { WeatherBlockForecastItem } from "containers/Weather/components/WeatherBlockForecastItem";

export const WeatherBodyForecastBlock = (props) => {
  const { t } = useTranslation();
  return (
    <div className={"weather-body-forecast-block"}>
      <div className={"weather-body-forecast-block__title"}>
        <span>{t("authorized.weather.forecast")}</span>
      </div>
      <div className={"weather-body-forecast-block__slider"}>
        {props.forecast5Days !== null
          ? props.forecast5Days.map((e) => {
              return (
                <WeatherBlockForecastItem
                  key={_.uniqueId(e)}
                  dateItem={`${e.dt_txt.slice(8, 10)}.${e.dt_txt.slice(5, 7)}`}
                  timeItem={`${e.dt_txt.slice(11, 16)}`}
                  image={e.weather[0].icon}
                  temperature={e.main.temp}
                  {...props}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
