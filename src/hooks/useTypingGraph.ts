import { useEffect, useState } from "react"
import { useAppSelector } from "./redux";

export const useTypingGraph = () => {
    const typing = useAppSelector(store => store.typing);

    const [speeds, setSpeeds] = useState<Array<number | string>>([]);
    const [misses, setMisses] = useState<number[]>([]);
    const [labels, setLabels] = useState<Array<number | string>>([]);

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

    return [speeds, misses, labels] as const;
}