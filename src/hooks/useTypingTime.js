import { useEffect, useState } from "react";
import { useStopwatch } from "./useStopwatch";
import { useDispatch, useSelector } from "react-redux";
import { stopTyping, updateTypingTime } from "../store/reducers/typingSlice";

export const useTypingTime = () => {
    const typing = useSelector(store => store.typing);
    const dispatch = useDispatch();

    const [stopwatchStart, setStopwatchStart] = useState(false);
    const [permitStart, setPermitStart] = useState(false);
    const [seconds, timeOnLimit, timeReset] = useStopwatch(stopwatchStart, typing.timeLimit);

    useEffect(() => {
        if (typing.time === 0 && seconds !== 0) {
            timeReset();
        }
    }, [typing.time]);

    useEffect(() => {
        if (timeOnLimit) {
            dispatch(stopTyping());
        }
    }, [timeOnLimit]);

    useEffect(() => {
        dispatch(updateTypingTime(seconds));
    }, [seconds]);

    useEffect(() => {
        setStopwatchStart(permitStart);
    }, [permitStart]);

    useEffect(() => {
        if (typing.started && !permitStart) {
            setPermitStart(typing.wasCorrect);
        } else {
            setPermitStart(typing.started);
        }
    }, [typing.started, typing.wasCorrect]);
};