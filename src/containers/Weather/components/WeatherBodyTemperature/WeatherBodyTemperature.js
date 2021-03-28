import { useTemperatureMeasure } from "hooks/useTemperatureMeasure";
import { useTranslation } from "react-i18next";
import "./WeatherBodyTemperature.css";

import { WeatherSwitcherTemperature } from "containers/Weather/components/WeatherSwitcherTemperature";

export const WeatherBodyTemperature = (props) => {
  const { t } = useTranslation();
  const temperature = useTemperatureMeasure(
    props.weatherUnitsOfMeasure,
    props.weatherToday !== null ? props.weatherToday.main.temp : null
  );
  return (
    <div className={"weather-body-temperature"}>
      <div className={"weather-body-temperature__block-1"}>
        <div className={"weather-body-temperature__span"}>
          <span>{props.weatherToday !== null ? temperature : null}</span>
        </div>
        <div className={"weather-body-temperature__sup"}>
          <p>
            <sup>o</sup>
          </p>
        </div>
        <WeatherSwitcherTemperature {...props} />
      </div>
      <div className={"weather-body-temperature__block-2"}>
        <div className={"weather-body-temperature__description"}>
          <span>
            {props.weatherToday !== null
              ? t(
                  `authorized.weather.weather-conditions.${props.weatherToday.weather[0].id}`
                )
              : null}
          </span>
        </div>
      </div>
    </div>
  );
};
