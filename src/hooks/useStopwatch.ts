import { useEffect, useRef, useState } from "react"

export const useStopwatch = (start: boolean, limit: number) => {
    const interval = useRef<undefined | NodeJS.Timer>();
    const [onLimit, setOnLimit] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);

    function reset() {
        setSeconds(0);
        setOnLimit(false);
    }

    useEffect(() => {
        if (start && !onLimit) {
            interval.current = setInterval(() => setSeconds(prev => prev + 1), 1000);
        } else {
            clearInterval(interval.current);
        }
    }, [start, onLimit]);

    useEffect(() => {
        if (seconds === limit) {
            setOnLimit(true);
        }
    }, [seconds])


    return [seconds, onLimit, reset] as const;
}