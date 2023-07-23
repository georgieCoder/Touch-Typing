import React from 'react'
import styles from './keyboard.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const KeyboardKey = ({keyboardKey}) => {
    const [isShiftPressed, setIsShiftPressed] = useState(false);
    const [isKeyActive, setIsKeyActive] = useState(false);
    const {requiredPresses} = useSelector(store => store.keyboard);

    const getClassNames = () => {
        const classArray = [
            styles.keyboardKey,
            styles[keyboardKey.info.whichFinger],
            styles[keyboardKey.info.whichHand], 
            styles[keyboardKey.info.keySize],
            styles[keyboardKey.name]
        ];

        if (isKeyActive) {
            classArray.push(styles.active);
        }

        return classArray.join(' ');
    }

    useEffect(() => {
        requiredPresses.forEach(press => {
            const pressValues = Object.values(press);
            if (pressValues.includes('ShiftRight') || pressValues.includes('ShiftLeft') ) {
                setIsShiftPressed(true);
            }

            if (pressValues.includes(keyboardKey.name) || 
                pressValues.includes(keyboardKey.info.ifShiftIsPressed)) {
                    setIsKeyActive(true);
            }
        })

        return () => {
            setIsShiftPressed(false);
            setIsKeyActive(false);
        }

    }, [requiredPresses])


    return (
        <div className = {getClassNames()}>
            {
                isShiftPressed
                ?
                keyboardKey.info.ifShiftIsPressed
                :
                keyboardKey.name
            } 
        </div>
    )
}

export default KeyboardKey;
