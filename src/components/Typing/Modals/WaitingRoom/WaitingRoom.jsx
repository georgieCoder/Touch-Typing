import React, { useEffect, useRef, useState } from 'react'
import { useWaitingRoom } from '../../../../hooks/useWaitingRoom'
import MyModal from '../../../UI/MyModal/MyModal';
import MyModalContent from '../../../UI/MyModal/MyModalContent';
import MyModalFooter from '../../../UI/MyModal/MyModalFooter';
import MyModalHeader from '../../../UI/MyModal/MyModalHeader';
import ProgressBar from '../../../UI/ProgressBar/ProgressBar';
import cl from './WaitingRoom.module.css';
import { useDispatch, useSelector } from 'react-redux';
import MyButtonRed from '../../../UI/Buttons/MyButtonRed';
import { startTyping } from '../../../../store/reducers/typingSlice';

const WaitingRoom = () => {
  const interval = useRef();
  const dispatch = useDispatch();
  const visible = useWaitingRoom();
  const typingStore = useSelector(store => store.typing);
  const [leftWaitingTime, setLeftWaitingTime] = useState(0);

  const handleWaitingRoom = (e) => {
    e.preventDefault();
    e.key === " " && dispatch(startTyping())
  }

  useEffect(() => {
    if (leftWaitingTime <= 0) {
      visible && window.addEventListener('keydown', handleWaitingRoom);
      clearInterval(interval.current);
    }

    return () => window.removeEventListener('keydown', handleWaitingRoom);
  }, [leftWaitingTime, visible]);

  useEffect(() => {
    if (visible) {
      setLeftWaitingTime(typingStore.waitingTime);
      interval.current = setInterval(() => {
        setLeftWaitingTime(prev => prev - 0.05)
      }, 50);
    }
  }, [visible]);


  return (
    <MyModal visible={visible}>
      <div className={cl.waitingWrapper}>
          <MyModalHeader>
            <div className={cl.waitingHeader}>
              <h3>
                Ошибка
              </h3>
            </div>
          </MyModalHeader>

          <MyModalContent>
            <div className={cl.waitingContent}>
              <p className={cl.waitingQuote}>
                Глупость не обязательно делает человека злым, но злоба всегда делает его глупым.
              </p>
              <i className={cl.waitingAuthor}>
                Франсуаза Саган
              </i>
            </div>
          </MyModalContent>

          <MyModalFooter>
            <div className={cl.waitingFooter}>
              {
                leftWaitingTime > 0
                ?
                  <ProgressBar progressStatus={leftWaitingTime / typingStore.waitingTime} />
                :
                <MyButtonRed onClick={() => dispatch(startTyping())}>
                  Закрыть
                </MyButtonRed>
              }
            </div>
          </MyModalFooter>
      </div>
  </MyModal>
  )
}

export default WaitingRoom
