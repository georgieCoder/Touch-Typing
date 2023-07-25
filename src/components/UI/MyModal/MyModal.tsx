import React from 'react';
import cl from './MyModal.module.css';

interface MyModalProps {
    visible: boolean
}

const MyModal: React.FC<React.PropsWithChildren<MyModalProps>> = ({children, visible}) => {
    const rootClasses = [cl.myModal];

    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.myModalForm}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;
