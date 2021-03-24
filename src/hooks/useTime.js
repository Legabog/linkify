import { useState, useEffect } from "react";

export const useTime = () => {
  // eslint-disable-next-line
  const date = new Date();
  const [time, setTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  useEffect(() => {
    const upd = setInterval(() => {
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(upd);
  }, [date]);

  return [time.hours, time.minutes, time.seconds, setTime];
};
