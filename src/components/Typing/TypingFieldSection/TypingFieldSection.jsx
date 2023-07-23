import React from 'react';
import TypingControl from './TypingControl/TypingControl';
import TypingField from './TypingField/TypingField';
import styles from './typingFieldSection.module.css';

const TypingFieldSection = () => {

    return (
        <div className={styles.typingFieldSection}>
            <TypingControl />
            <div className={styles.typingFieldWrapper}>
                <TypingField />
            </div>
        </div>
    )
}

export default TypingFieldSection
