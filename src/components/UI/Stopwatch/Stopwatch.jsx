import React from 'react'
import { useFormatedTime } from '../../../hooks/useFormatedTime';
import { timeToString } from '../../../utils/timeToString';
import styles from './stopwatch.module.css'

const Stopwatch = ({time}) => {
  const [seconds, minutes] = useFormatedTime(time);

  return (
    <div className={styles.stopwatch}>
        {timeToString(minutes, seconds)}
    </div>
  )
}

export default Stopwatch;
