import React, { useEffect, useRef }  from 'react';
import keyboardHint from '../../../../img/icons/keyboard-hint.png';
import hands from '../../../../img/icons/hand.png';
import timer from '../../../../img/icons/timer.png';
import punish from '../../../../img/icons/punish.png';
import styles from './typingControl.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseTimeLimit, increaseWaitingTime, stopTyping } from '../../../../store/reducers/typingSlice';
import { hideHands, showHands, hideKeyboard, showKeyboard } from '../../../../store/reducers/keyboardSlice';

const TypingControl = () => {
  const dispatch = useDispatch();
  const {timeLimit, waitingTime} = useSelector(store => store.typing);
  const {handsVisible, keyboardVisible} = useSelector(store => store.keyboard);
  const handsControl = useRef();
  const keyboardControl = useRef();
  const waitingTimeControl = useRef();

  useEffect(() => {
    if (waitingTime <= 0) {
      waitingTimeControl.current.classList.add(styles.disabled);
    } else {
      waitingTimeControl.current.classList.remove(styles.disabled);
    }
  }, [waitingTime])

  const toggleHands = () => {
    if (handsVisible) {
        dispatch(hideHands());
        handsControl.current.classList.add(styles.disabled)
    } else {
        dispatch(showHands());
        handsControl.current.classList.remove(styles.disabled)
    }
  }

  const toggleKeyboard = () => {
    if (keyboardVisible) {
        dispatch(hideKeyboard());
        keyboardControl.current.classList.add(styles.disabled)
    } else {
        dispatch(showKeyboard());
        keyboardControl.current.classList.remove(styles.disabled)
    }
  }

  return (
    <div className={styles.typingControl}>
        <div className={styles.typingControl__info}>
          Русская раскладка |&nbsp;
          <span onClick={() => dispatch(stopTyping())}>
            пауза
          </span>
        </div>

        <div className={styles.typingControl__modes}>
          <div className={`${styles.typingControl__mode} ${styles.mode}`}
            onClick={() => toggleKeyboard()}
            ref={keyboardControl}
          >
              <div className={styles.mode__icon}>
                <img src={keyboardHint} alt='keyboard'/>
              </div>
          </div>

          <div className={`${styles.typingControl__mode} ${styles.mode}`}
            onClick={() => toggleHands()}
            ref={handsControl}
          >
              <div className={styles.mode__icon}>
                <img src={hands} alt='hand'/>
              </div>
          </div>

          <div className={`${styles.typingControl__mode} ${styles.mode}`}
            onClick={() => dispatch(increaseTimeLimit())}
          >
              <div className={styles.mode__icon}>
                <img  src={timer} alt='timer'/>
              </div>
              <span>{timeLimit / 60}</span>
          </div>
          
          <div className={`${styles.typingControl__mode} ${styles.mode}`}
            onClick={() => dispatch(increaseWaitingTime())}
            ref={waitingTimeControl}
          >
              <div className={styles.mode__icon}>
                <img src={punish} alt='punish'/>
              </div>
              {
                waitingTime > 0
                &&
                <span>{waitingTime}</span>
              }
          </div>
        </div>
      </div>
  )
}

export default TypingControl
