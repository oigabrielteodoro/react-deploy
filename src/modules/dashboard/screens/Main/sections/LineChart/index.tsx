import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { format, eachDayOfInterval } from 'date-fns';

import { ChartData } from 'react-chartjs-2';
import { ChartData as IChartData } from 'chart.js';

import chartConfig from '../../../../../../config/chart';

interface ILineChartProps {
  data?: ChartData<IChartData>;
  height?: number;
  selectedDays: Date[];
}

const data = {
  datasets: [
    {
      label: 'Usuários',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#7051dc',
      borderColor: '#7051dc',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#7051dc',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#7051dc',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 30],
    },
  ],
} as ChartData<IChartData>;

const LineChart: React.FC<ILineChartProps> = ({ height, selectedDays }) => {
  const labelSelectedDays = useMemo(() => {
    const [start, end] = selectedDays;

    const parsedDays = eachDayOfInterval({
      start,
      end,
    });

    return parsedDays.map(date => format(date, 'dd/MM'));
  }, [selectedDays]);

  return (
    <Line
      data={{ ...data, labels: labelSelectedDays }}
      height={height || 80}
      options={chartConfig.line.options}
    />
  );
};

export default LineChart;
