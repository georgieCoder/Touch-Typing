import React from 'react';
import cl from './MyModal.module.css';

const MyModalContent= ({children}) => {
  return (
      <div className={cl.myModalContent}>
          {children}
      </div>
  )
}

export default MyModalContent;