import React from 'react'
import { useFormatedTime } from '../../../hooks/useFormatedTime';
import { timeToString } from '../../../utils/timeToString';
import styles from './stopwatch.module.css'

interface StopwatchProps {
  time: number
}

const Stopwatch: React.FC<StopwatchProps> = ({time}) => {
  const [seconds, minutes] = useFormatedTime(time);

  return (
    <div className={styles.stopwatch}>
        {timeToString(minutes, seconds)}
    </div>
  )
}

export default Stopwatch;
