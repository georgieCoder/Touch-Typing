import React from 'react';
import cl from './MyModal.module.css';

const MyModalFooter: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className={cl.myModalFooter}>
            {children}
        </div>
    )
}

export default MyModalFooter;