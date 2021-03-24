import "./WeatherHeader.css";

import { WeatherHeaderPlace } from "containers/Weather/components/WeatherHeaderPlace";
import { WeatherHeaderDate } from "containers/Weather/components/WeatherHeaderDate";
import { WeatherHeaderTime } from "containers/Weather/components/WeatherHeaderTime";
import { WeatherHeaderAppTitle } from "containers/Weather/components/WeatherHeaderAppTitle";

export const WeatherHeader = (props) => {
  return (
    <div className={"weather-header"}>
      <WeatherHeaderAppTitle />
      <div className={"weather-header_block-wrapper"}>
        <div className={"weather-header_block"}>
          <WeatherHeaderPlace {...props} />
          <WeatherHeaderDate {...props} />
          <WeatherHeaderTime {...props} />
        </div>
      </div>
    </div>
  );
};
