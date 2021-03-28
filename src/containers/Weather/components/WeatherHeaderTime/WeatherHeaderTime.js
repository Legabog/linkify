import { useTime } from "hooks/useTime";
import "./WeatherHeaderTime.css";

export const WeatherHeaderTime = (props) => {
  const [hours, minutes, seconds] = useTime();

  return (
    <div className={"weather-header__time"}>
      <span>
        {hours < 10 ? `0${hours}:` : `${hours}:`}
        {minutes < 10 ? `0${minutes}:` : `${minutes}:`}
        {seconds < 10 ? `0${seconds}` : `${seconds}`}
      </span>
    </div>
  );
};
