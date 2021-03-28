import "./WeatherHeaderPlace.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";

export const WeatherHeaderPlace = (props) => {
  return (
    <div className={"weather-header__place"}>
      <LocationOnIcon />
      <span>
        {props.weatherAddress !== null
          ? props.weatherAddress.city !== undefined
            ? props.weatherAddress.city
            : props.weatherAddress.state !== undefined
            ? props.weatherAddress.state
            : props.weatherAddress.town
          : null}
        , {props.weatherAddress !== null ? props.weatherAddress.country : null}
      </span>
    </div>
  );
};
