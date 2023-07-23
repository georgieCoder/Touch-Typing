import React from 'react';
import { useSelector } from 'react-redux';
import styles from './summaryScores.module.css';
import iconTime from '../../../../../img/icons/sandclock.png';
import iconAccuracy from '../../../../../img/icons/accuracy.png';
import iconKeyboard from '../../../../../img/icons/keyboard.png';
import iconSpeed from '../../../../../img/icons/speed.png';
import { useFormatedTime } from '../../../../../hooks/useFormatedTime';
import { timeToString } from '../../../../../utils/timeToString';
import SummaryScore from './SummaryScore';

const SummaryScores = () => {
  const typing = useSelector(store => store.typing);
  const [seconds, minutes] = useFormatedTime(typing.time);

  return (
    <div className={styles.scores}>
        <SummaryScore 
            title = 'Время' 
            value = {timeToString(minutes, seconds)}
            icon = {iconTime}
        />
        <SummaryScore 
            title = 'Набрано' 
            value = {timeToString(minutes, seconds)}
            measure='зн'
            icon = {iconKeyboard}
        />
        <SummaryScore 
            title = 'Скорость' 
            value = {
                (typing.time) === 0 ? 
                0 : 
                Math.round(typing.countCorrectKeys * 60 / typing.time)
            }
            measure='зн/м'
            icon = {iconSpeed}
        />
        <SummaryScore 
            title = 'Точность' 
            value = {
                typing.countWrongKeys >= typing.countCorrectKeys ? 
                0 : 
                Math.round(100 * (1 - typing.countWrongKeys / typing.countCorrectKeys))
            }
            measure='%'
            icon = {iconAccuracy}
        />
    </div>
  )
}

export default SummaryScores;
