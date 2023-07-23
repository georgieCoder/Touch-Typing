import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetTyping, startTyping, updateVisibleText } from '../../../../../store/reducers/typingSlice';
import MyButton from '../../../../UI/Buttons/MyButton';
import MyButtonRed from '../../../../UI/Buttons/MyButtonRed';
import styles from './summaryControl.module.css';

const SummaryControl = () => {
    const dispatch = useDispatch();
    const typing = useSelector(store => store.typing);

    const exit = () => {
        dispatch(resetTyping());
    };

    const startOver = () => {
        dispatch(resetTyping());
        dispatch(startTyping());
        dispatch(updateVisibleText());
    };

    const startHere = () => {
        dispatch(startTyping());
    };

    return (
        <div className={styles.control}>
            <div className={styles.buttons}>
                <MyButton onClick={exit}>Завершить</MyButton>
                <MyButton onClick={startOver}>Начать сначала</MyButton>
                {
                    typing.time < typing.timeLimit && 
                    <MyButtonRed onClick={startHere}>Продолжить</MyButtonRed>
                }
            </div>
        </div>
    )
}

export default SummaryControl;
