import "./WeatherBodyMainBlock.css";

import { WeatherBodyTemperature } from "containers/Weather/components/WeatherBodyTemperature";
import { WeatherBodySecondaryInfo } from "containers/Weather/components/WeatherBodySecondaryInfo";
import { WeatherBodySecondaryInfo2 } from "containers/Weather/components/WeatherBodySecondaryInfo2";
import { WeatherBodyWeatherImage } from "containers/Weather/components/WeatherBodyWeatherImage";

export const WeatherBodyMainBlock = (props) => {
  return (
    <div className={"weather-body-main-block-wrapper"}>
      <div className={"weather-body-main-block"}>
        <div className={"weather-body-main-block_section-1"}>
          <WeatherBodyWeatherImage {...props} />
          <WeatherBodyTemperature {...props} />
        </div>
        <div className={"weather-body-main-block_section-2"}>
          <WeatherBodySecondaryInfo {...props} />
          <WeatherBodySecondaryInfo2 {...props} />
        </div>
      </div>
    </div>
  );
};
