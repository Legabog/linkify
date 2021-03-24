import { useTranslation } from "react-i18next";
import "./WeatherSwitcherTemperature.css";

import { WeatherSwitcherTemperatureItem } from "containers/Weather/components/WeatherSwitcherTemperatureItem";

export const WeatherSwitcherTemperature = (props) => {
  const { t } = useTranslation();

  return (
    <div className={"weather-switcher-temperature-wrapper"}>
      <div className={"weather-switcher-temperature"}>
        <WeatherSwitcherTemperatureItem
          units={"C"}
          helpTitle={t("authorized.weather.help-messages.0")}
          helpMarginLeft={"-75px"}
          helpMarginTop={"70px"}
          {...props}
        />
        <WeatherSwitcherTemperatureItem
          units={"F"}
          helpTitle={t("authorized.weather.help-messages.1")}
          helpMarginLeft={"0px"}
          helpMarginTop={"70px"}
          {...props}
        />
        <WeatherSwitcherTemperatureItem
          units={"K"}
          helpTitle={t("authorized.weather.help-messages.2")}
          helpMarginLeft={"60px"}
          helpMarginTop={"70px"}
          {...props}
        />
      </div>
      <div className={"weather-switcher-temperature__description"}>
        <span>{t("authorized.weather.switcher-description")}</span>
      </div>
    </div>
  );
};
