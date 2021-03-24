import { useState } from "react";

export const useDate = () => {
  const date = new Date();
  const [dateResult] = useState({
    day: date.getDate(),
    dayOfWeek: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear()
  });

  return [dateResult.day, dateResult.dayOfWeek, dateResult.month, dateResult.year]
};
