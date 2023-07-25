import React from 'react'
import SummaryControl from './SummaryControl/SummaryControl'
import { SummaryGraph } from './SummaryGraph/SummaryGraph'
import MyModalHeader from '../../../UI/MyModal/MyModalHeader'
import MyModalContent from '../../../UI/MyModal/MyModalContent'
import MyModalFooter from '../../../UI/MyModal/MyModalFooter'
import MyModal from '../../../UI/MyModal/MyModal'
import { useSummary } from '../../../../hooks/useSummary'
import styles from './summary.module.css'
import SummaryScores from './SummaryScores/SummaryScores'

const Summary = () => {
  const visible = useSummary();

  return (
    <MyModal visible={visible}>
      <div className={styles.wrapper}>
          <MyModalHeader>
            <div className={styles.header}>
              <h3 className={styles.title}>
                Результат
              </h3>
            </div>
          </MyModalHeader>

          <MyModalContent>
            <div className={styles.content}>
              <div className={styles.statistics}>
                <SummaryScores />
                <SummaryGraph />
              </div>
            </div>
          </MyModalContent>

          <MyModalFooter>
            <div className={styles.footer}>
              <SummaryControl />
            </div>
          </MyModalFooter>
      </div>
  </MyModal>
  )
}

export default Summary
