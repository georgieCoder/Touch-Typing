import { useEffect, useState } from "react";

export const useFormatedTime = (time: number) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    setSeconds(time % 60);
    setMinutes(Math.floor(time / 60));
  }, [time])

  return [seconds, minutes] as const;
}