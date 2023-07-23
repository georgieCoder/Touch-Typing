import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useWaitingRoom = () => {
    const typing = useSelector(store => store.typing);
    const dispatch = useDispatch();
    const [showWaitingRoom, setShowWaitingRoom] = useState(false);

    useEffect(() => {
        if (!typing.started) {
            setShowWaitingRoom(typing.waitingTime > 0 && typing.wasWrong);
        } else {
            setShowWaitingRoom(false);
        }
    }, [typing.wasWrong, typing.started, typing.waitingTime]);

    return showWaitingRoom;
}