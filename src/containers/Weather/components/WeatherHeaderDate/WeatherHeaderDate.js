import { useTranslation } from "react-i18next";
import { useDate } from "hooks/useDate";
import "./WeatherHeaderDate.css";

export const WeatherHeaderDate = (props) => {
  const [day, dayOfWeek, month, year] = useDate();
  const { t } = useTranslation();
  return (
    <div className={"weather-header__date"}>
      <span>
        {t(`authorized.weather.day-of-week.${dayOfWeek}`)},{" "}
        {t(`authorized.weather.month.${month}`)} {day}, {year}
      </span>
    </div>
  );
};
