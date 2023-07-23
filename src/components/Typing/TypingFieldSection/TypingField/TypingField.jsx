import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './typingField.module.css';

const TypingField = () => {
    const typing = useSelector(store => store.typing);

    return (
        typing.started || typing.wasWrong
            ?
            <div className={styles.typingField}>
                <div className={[styles.segment, styles.passed].join(' ')}>
                    <span>{typing.passedText}</span> 
                </div>
                <div className={[styles.segment, styles.coming].join(' ')}>
                    {typing.comingText}
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
