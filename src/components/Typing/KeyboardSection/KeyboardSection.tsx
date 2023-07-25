import React, { useEffect } from 'react'
import styles from './keyboardSection.module.css';
import Hand from './Hand/Hand';
import Keyboard from './Keyboard/Keyboard';
import { whatToPress } from '../../../keyboardLayouts/whatToPress';
import { setRequiredPresses } from '../../../store/reducers/keyboardSlice';
import { ILayout } from '../../../models/ILayout';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { whichFinger, whichHand } from '../../../models/IKeyboardKey';

interface KeyboardSectionProps {
    keyboardLayout: ILayout
}

const KeyboardSection: React.FC<KeyboardSectionProps> = ({keyboardLayout}) => {
    const dispatch = useAppDispatch();
    const {
        leftHandFinger, 
        rightHandFinger, 
        handsVisible, 
        keyboardVisible
                        } = useAppSelector(store => store.keyboard);
    const {currentLetter} = useAppSelector(store => store.typing);

    useEffect(() => {
        const requiredPresses = whatToPress(keyboardLayout, currentLetter);

        dispatch(setRequiredPresses(requiredPresses));
    }, [currentLetter])

    return (
        <div className={styles.keyboardSection}>
            {
                handsVisible &&
                <>
                    <div className={styles.leftHandWrapper}>
                        <Hand whichHand={whichHand.left} whichFinger={leftHandFinger}/>
                    </div>
                    <div className={styles.rightHandWrapper}>
                        <Hand whichHand={whichHand.right} whichFinger={rightHandFinger}/>
                    </div>
                </>
            }
            {
                keyboardVisible &&
                <div className={styles.keyboardWrapper}>
                    <Keyboard />
                </div>
            }
        </div>
    )
}

export default KeyboardSection;

