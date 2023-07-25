import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

export const useSummary = (): boolean => {
    const typing = useAppSelector(store => store.typing);
    const [showSummary, setShowSummary] = useState<boolean>(false);

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