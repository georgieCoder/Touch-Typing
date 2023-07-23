import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export const useTypingGraph = () => {
    const typing = useSelector(store => store.typing);

    const [speeds, setSpeeds] = useState([]);
    const [misses, setMisses] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        if (typing.time !== 0) {
            setLabels([...labels, typing.time]);
            setSpeeds([...speeds, Math.round(typing.countCorrectKeys / (typing.time / 60))]);
            setMisses([...misses, Math.round(typing.countWrongKeys / (typing.time / 60))]);
        } else {
            setLabels([0]);
            setSpeeds([]);
            setMisses([]);
        }
    }, [typing.time]);

    return [speeds, misses, labels];
}