import React, { useEffect } from 'react';
import TypingStopwatch from './TypingStopwatch/TypingStopwatch';
import TypingFieldSection from './TypingFieldSection/TypingFieldSection';
import KeyboardSection from './KeyboardSection/KeyboardSection';
import TypingModals from './Modals/TypingModals';
import styles from './typing.module.css';
import { resetKeyboard, setKeyboardLayout } from '../../store/reducers/keyboardSlice';
import { initTypingField, resetTyping } from '../../store/reducers/typingSlice';
import { useTypingListener } from '../../hooks/useTypingListener';
import { useAppDispatch } from '../../hooks/redux';
import { ILayout } from '../../models/ILayout';

interface TypingProps {
    keyboardLayout: ILayout,
    text: string,
    lengthLimit: number
}

const Typing: React.FC<TypingProps> = ({keyboardLayout, text, lengthLimit}) => {
    const dispatch = useAppDispatch();

    const handleTyping = useTypingListener();
    
    useEffect(() => {
        dispatch(initTypingField({text, lengthLimit}))
        dispatch(setKeyboardLayout(keyboardLayout));
        return () => {
          dispatch(resetTyping());
          dispatch(resetKeyboard());
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', handleTyping);
  
        return () => window.removeEventListener('keydown', handleTyping);
    }, [handleTyping])

    return (
        <div className={styles.typing}>
            <TypingStopwatch />
            <div className={styles.typingFieldSectionWrapper}>
                <TypingFieldSection />
            </div>
            <div className={styles.keyboardSectionWrapper}>
                <KeyboardSection keyboardLayout = {keyboardLayout}/>
            </div>
            <TypingModals />
        </div>
    )
}

export default Typing
