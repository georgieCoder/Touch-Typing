import { useEffect, useState } from "react";

export const useFormatedTime = (time) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setSeconds(time % 60);
    setMinutes(Math.floor(time / 60));
  }, [time])

  return [seconds, minutes];
}