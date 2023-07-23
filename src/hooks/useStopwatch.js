import { useEffect, useRef, useState } from "react"

export const useStopwatch = (start, limit) => {
    const interval = useRef();
    const [onLimit, setOnLimit] = useState(false);
    const [seconds, setSeconds] = useState(0);

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


    return [seconds, onLimit, reset];
}