import React, { useEffect, useRef} from 'react'
import cl from './ProgressBar.module.css'

const ProgressBar = ({progressStatus}) => {
    const progressInner = useRef();

    useEffect(() => {
        progressInner.current.style.setProperty('--progressWidth', progressStatus * 100);
    }, [progressStatus]);

    return (
        <div className={cl.progressBar}>
            <div className={cl.progressBar__inner} ref={progressInner}/>
        </div>
  )
}

export default ProgressBar
