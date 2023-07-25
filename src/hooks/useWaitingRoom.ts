import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

export const useWaitingRoom = (): boolean => {
    const typing = useAppSelector(store => store.typing);
    const [showWaitingRoom, setShowWaitingRoom] = useState<boolean>(false);

    useEffect(() => {
        if (!typing.started) {
            setShowWaitingRoom(typing.waitingTime > 0 && typing.wasWrong);
        } else {
            setShowWaitingRoom(false);
        }
    }, [typing.wasWrong, typing.started, typing.waitingTime]);

    return showWaitingRoom;
}