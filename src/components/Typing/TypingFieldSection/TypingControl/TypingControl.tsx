import React, { useEffect, useRef }  from 'react';
import styles from './typingControl.module.css';
import { increaseTimeLimit, increaseWaitingTime, stopTyping } from '../../../../store/reducers/typingSlice';
import { toggleKeyboard, toggleHands } from '../../../../store/reducers/keyboardSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

const TypingControl: React.FC = () => {
  const dispatch = useAppDispatch();
  const {timeLimit, waitingTime} = useAppSelector(store => store.typing);
  const {handsVisible, keyboardVisible} = useAppSelector(store => store.keyboard);

  const handsControl = useRef<HTMLAnchorElement>(null);
  const keyboardControl = useRef<HTMLAnchorElement>(null);
  const waitingTimeControl = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (waitingTime <= 0) {
      waitingTimeControl?.current?.classList.add(styles.disabled);
    } else {
      waitingTimeControl?.current?.classList.remove(styles.disabled);
    }
  }, [waitingTime])

  useEffect(() => {
    if (!handsVisible) {
      handsControl?.current?.classList.add(styles.disabled);
    } else {
      handsControl?.current?.classList.remove(styles.disabled);
    }
  }, [handsVisible])

  useEffect(() => {
    if (!keyboardVisible) {
      keyboardControl?.current?.classList.add(styles.disabled);
    } else {
      keyboardControl?.current?.classList.remove(styles.disabled);
    }
  }, [keyboardVisible])

  return (
    <div className={styles.typingControl}>
        <div className={styles.info}>
          Русская раскладка |&nbsp;
          <span onClick={() => dispatch(stopTyping())}>
            пауза
          </span>
        </div>

        <div className={styles.modes}>
          <a href='#' 
            data-hint={true} 
            title='[F1] Скрыть клавиатуру'
            className={styles.mode}
            onClick={() => dispatch(toggleKeyboard())}
            ref={keyboardControl}
          >
                <i className={[styles.icon, styles.keyboard].join(' ')}></i>
          </a>

          <a href='#' 
            data-hint={true} 
            title='[F2] Скрыть руки'
            className={styles.mode}
            onClick={() => dispatch(toggleHands())}
            ref={handsControl}
          >
                <i className={[styles.icon, styles.hands].join(' ')}></i>
          </a>

          <a href='#' 
            data-hint={true}
            title='[F3] Время автоматической остановки' 
            className={styles.mode}
            onClick={() => dispatch(increaseTimeLimit())}
          >
                <i className={[styles.icon, styles.timeLimit].join(' ')}></i>
                <span>{timeLimit / 60}</span>
          </a>
          
          <a href='#' 
            data-hint={true} 
            title='[F4] Режим "Железные нервы"'
            className={styles.mode}
            onClick={() => dispatch(increaseWaitingTime())}
            ref={waitingTimeControl}
          >
                <i className={[styles.icon, styles.waitingTime].join(' ')}></i>
                {
                    waitingTime > 0
                    &&
                    <span>{waitingTime}</span>
                }
          </a>
        </div>
      </div>
  )
}

export default TypingControl
