import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    correctKeystroke, incorrectKeystroke, 
    increaseTimeLimit, 
    increaseWaitingTime, 
    startTyping, stopTyping, updateVisibleText 
} from "../store/reducers/typingSlice";
import { toggleHands, toggleKeyboard } from "../store/reducers/keyboardSlice";

export const useTypingListener = () => {
    const dispatch = useDispatch();
    const typing = useSelector(store => store.typing);

    const handleTyping = useCallback((e) => {
        e.preventDefault();
        if (typing.started) {
            switch (e.key) {
                case "Control":
                case "Shift":
                case "Alt":
                    break;
                
                case "Escape":
                    dispatch(stopTyping());
                    break;

                case typing.currentLetter:
                    dispatch(correctKeystroke());
                    dispatch(updateVisibleText());
                    break;

                default:
                    if (typing.wasCorrect && !typing.wasWrong) {
                        dispatch(incorrectKeystroke());
                    }
                    if (typing.waitingTime > 0 && typing.wasCorrect) {
                        dispatch(stopTyping());
                    }
                    break;
            }
        } else {
            if (!typing.wasWrong && e.key === " " && !typing.timeOnLimit) {
                dispatch(startTyping());
                dispatch(updateVisibleText());
            }
        }

        switch (e.key) {
            case "F1":
                dispatch(toggleKeyboard());
                break;
            case "F2":
                dispatch(toggleHands());
                break;
            case "F3":
                dispatch(increaseTimeLimit());
                break;
            case "F4":
                dispatch(increaseWaitingTime());
                break;
        }
    }, [typing.started, typing.currentLetter, typing.countCorrectKeys, typing.wasCorrect, typing.wasWrong, typing.timeOnLimit, typing.waitingTime])

    return handleTyping;
}