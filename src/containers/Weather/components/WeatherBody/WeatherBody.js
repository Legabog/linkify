import "./WeatherBody.css";

import { WeatherBodyMainBlock } from "containers/Weather/components/WeatherBodyMainBlock";
import { WeatherBodyForecastBlock } from "containers/Weather/components/WeatherBodyForecastBlock";
import { WeatherBodyPoweredBy } from "containers/Weather/components/WeatherBodyPoweredBy/WeatherBodyPoweredBy";

export const WeatherBody = (props) => {
  return (
    <div className={"weather-body"}>
      <WeatherBodyMainBlock {...props} />
      <WeatherBodyForecastBlock {...props} />
      <WeatherBodyPoweredBy />
    </div>
  );
};
