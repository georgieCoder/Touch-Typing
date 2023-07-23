import React from 'react'
import Stopwatch from '../../UI/Stopwatch/Stopwatch'
import { useTypingTime } from '../../../hooks/useTypingTime';
import { useSelector } from 'react-redux';

const TypingStopwatch = () => {
    const {time} = useSelector(store => store.typing);

    useTypingTime();

    return (
        
        <Stopwatch time={time} />
    )
}

export default TypingStopwatch;
