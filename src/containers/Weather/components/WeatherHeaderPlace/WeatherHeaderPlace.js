import "./WeatherHeaderPlace.css";

import LocationOnIcon from "@material-ui/icons/LocationOn";

export const WeatherHeaderPlace = (props) => {
  return (
    <div className={"weather-header__place"}>
      <LocationOnIcon />
      <span>
        {props.address !== null
          ? props.address.city !== undefined
            ? props.address.city
            : props.address.state !== undefined
            ? props.address.state
            : props.address.town
          : null}
        , {props.address !== null ? props.address.country : null}
      </span>
    </div>
  );
};
