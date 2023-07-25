import React from 'react';
import cl from './MyModal.module.css';

const MyModalContent: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
      <div className={cl.myModalContent}>
          {children}
      </div>
  )
}

export default MyModalContent;