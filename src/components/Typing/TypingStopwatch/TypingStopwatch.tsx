import React from 'react'
import Stopwatch from '../../UI/Stopwatch/Stopwatch'
import { useTypingTime } from '../../../hooks/useTypingTime';
import { useAppSelector } from '../../../hooks/redux';

const TypingStopwatch: React.FC = () => {
    const {time} = useAppSelector(store => store.typing);

    useTypingTime();

    return (
        <Stopwatch time={time} />
    )
}

export default TypingStopwatch;
