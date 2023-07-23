import React, { useEffect } from 'react'
import styles from './keyboardSection.module.css';
import Hand from './Hand/Hand';
import Keyboard from './Keyboard/Keyboard';
import { useDispatch, useSelector } from 'react-redux';
import { whatToPress } from '../../../keyboardLayouts/whatToPress';
import { setRequiredPresses } from '../../../store/reducers/keyboardSlice';

const KeyboardSection = ({keyboardLayout}) => {
    const dispatch = useDispatch();
    const {leftHandFinger, rightHandFinger, handsVisible, keyboardVisible} = useSelector(store => store.keyboard);
    const {currentLetter} = useSelector(store => store.typing);

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
                        <Hand whichHand = "left" whichFinger = {leftHandFinger}/>
                    </div>
                    <div className={styles.rightHandWrapper}>
                        <Hand whichHand = "right" whichFinger = {rightHandFinger}/>
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

