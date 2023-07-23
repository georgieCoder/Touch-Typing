import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useSummary = () => {
    const typing = useSelector(store => store.typing);
    const [showSummary, setShowSummary] = useState(false);

    useEffect(() => {
        if (!typing.started && typing.wasOnceStarted) {
            if (typing.waitingTime <= 0) {
                setShowSummary(true);
            } else {
                setShowSummary(!typing.wasWrong);
            }
        } else {
            setShowSummary(false);
        }
    }, [typing.started, typing.wasOnceStarted, typing.wasWrong, typing.waitingTime])

    return showSummary;
}