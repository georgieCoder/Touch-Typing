import React from 'react';
import styles from './typingField.module.css';
import { useAppSelector } from '../../../../hooks/redux';

const TypingField: React.FC = () => {
    const {comingText, passedText, started, wasWrong} = useAppSelector(store => store.typing);

    return (
        started || wasWrong
            ?
            <div className={styles.typingField}>
                <div className={[styles.segment, styles.passed].join(' ')}>
                    <span>{passedText}</span> 
                </div>
                <div className={[styles.segment, styles.coming].join(' ')}>
                    {comingText}
                </div>
            </div>
            :
            <div className={styles.typingField}>
                <div className={[styles.segment, styles.introduce].join(' ')}>
                    Space - СТАРТ/Esc - СТОП
                </div>
            </div>

    )
}

export default TypingField;
