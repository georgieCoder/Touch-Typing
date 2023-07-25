import React from 'react';
import styles from './keyboard.module.css';
import KeyboardKey from './KeyboardKey';
import { useAppSelector } from '../../../../hooks/redux';

const Keyboard: React.FC = () => {
    const keyboardLayout = useAppSelector(store => store.keyboard.layout);

    return (
        <div className = {styles.keyboardPanelWrapper}>
            <div className = {styles.keyboardPanel}>
                {keyboardLayout.map((keyboardRow, rowIndex) => 
                    <div key = {rowIndex} className = {styles.keyboardRow}>
                        {keyboardRow.map((keyboardKey, keyIndex) =>
                            <KeyboardKey
                                key = {keyIndex}
                                keyboardKey = {keyboardKey}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Keyboard
