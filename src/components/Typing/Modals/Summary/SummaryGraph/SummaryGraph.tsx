import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTypingGraph } from '../../../../../hooks/useTypingGraph';
import styles from './summaryGraph.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options: any = {
  pointStyle: false,
  responsive: true,
  animation: {
    y: {
      duration: 1500,
      from: 500,
    },
    x: {
      duration: 0
    }
  },
  scales: {
    y: {
      min: 0,
    }
  },
  plugins: {
    legend: {
      display: false,
    }
  }
};

export const SummaryGraph: React.FC = () => {
  const [speeds, misses, labels] = useTypingGraph();
  const data: any = {
    labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.6,
        data: [misses[0], ...misses],
        borderColor: 'rgb(215, 110, 101)',
        backgroundColor: 'rgb(238, 178, 171, 0.5)',
      },
      {
        fill: true,
        lineTension: 0.6,
        data: [speeds[0], ...speeds],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className={styles.graph}>
      <Line options={options} data={data} />
    </div>
  );
}