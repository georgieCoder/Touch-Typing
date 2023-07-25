import React from 'react'
import styles from './keyboard.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { IKeyboardKey } from '../../../../models/IKeyboardKey';
import { useAppSelector } from '../../../../hooks/redux';

interface KeyboardKeyProps {
    keyboardKey: IKeyboardKey
}

const KeyboardKey: React.FC<KeyboardKeyProps> = ({keyboardKey}) => {
    const [isShiftPressed, setIsShiftPressed] = useState<boolean>(false);
    const [isKeyActive, setIsKeyActive] = useState<boolean>(false);
    const {requiredPresses} = useAppSelector(store => store.keyboard);

    const getClassNames = (): string => {
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
            if (press.name === "ShiftRight" || press.name === "ShiftLeft") {
                setIsShiftPressed(true);
            }
        })

        setIsKeyActive(requiredPresses.includes(keyboardKey));

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
