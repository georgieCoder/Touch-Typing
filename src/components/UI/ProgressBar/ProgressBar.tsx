import React, { useEffect, useRef} from 'react'
import cl from './ProgressBar.module.css'

interface ProgressBarProps {
    progressStatus: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({progressStatus}) => {
    const progressInner = useRef<HTMLDivElement>(null);

    useEffect(() => {
        progressInner?.current?.style.setProperty('--progressWidth', String(progressStatus * 100));
    }, [progressStatus]);

    return (
        <div className={cl.progressBar}>
            <div className={cl.progressBar__inner} ref={progressInner}/>
        </div>
  )
}

export default ProgressBar
