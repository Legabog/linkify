import { useTemperatureMeasure } from "hooks/useTemperatureMeasure";
import "./WeatherBlockForecastItem.css";

export const WeatherBlockForecastItem = (props) => {
  const temperature = useTemperatureMeasure(
    props.unitsOfMeasure,
    props.temperature
  );
  return (
    <div className={"weather-block-forecast-item-wrapper"}>
      <div className={"weather-block-forecast-item"}>
        <div className={"weather-block-forecast-item-header"}>
          <div className={"weather-block-forecast-item-date"}>
            <span>{props.dateItem}</span>
          </div>
          <div className={"weather-block-forecast-item-time"}>
            <span>{props.timeItem}</span>
          </div>
        </div>
        <div className={"weather-block-forecast-item-body"}>
          <div className={"weather-block-forecast-item-image"}>
            <img
              src={`https://openweathermap.org/img/wn/${props.image}.png`}
              alt={"description"}
            />
          </div>
          <div className={"weather-block-forecast-item-temperature"}>
            <span>{temperature}</span>
            <p>
              <sup>o</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
