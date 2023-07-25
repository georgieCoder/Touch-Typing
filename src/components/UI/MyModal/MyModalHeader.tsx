import React from 'react';
import cl from './MyModal.module.css';

const MyModalHeader: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={cl.myModalHeader}>
        {children}
    </div>
  )
}

export default MyModalHeader;
