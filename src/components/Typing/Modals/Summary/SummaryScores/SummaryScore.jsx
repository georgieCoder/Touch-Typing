import React from 'react'
import styles from './summaryScores.module.css';

const SummaryScore = ({title, value, measure='', icon}) => {
    return (
        <div className={styles.score}>
            <img src={icon} />
            <div className={styles.scoreBody}>
                <h2 className={styles.scoreTitle}>{title}</h2>
                <pre className={styles.scoreValue}>
                    <b>{value}</b> {measure}
                </pre>
            </div>
        </div>
    )
}

export default SummaryScore
