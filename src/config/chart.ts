import { ChartOptions } from 'chart.js';

export default {
  line: {
    options: {
      responsive: true,
      layout: {
        padding: 0,
      },
      legend: {
        display: false,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 16,
        },
      },
      elements: {
        point: {
          radius: 0,
          backgroundColor: '#7051dc',
        },
        line: {
          tension: 0.4,
          borderWidth: 4,
          borderColor: '#7051dc',
          backgroundColor: 'transparent',
          borderCapStyle: 'rounded',
        },
        rectangle: {
          backgroundColor: '#ff9000',
        },
        arc: {
          backgroundColor: '#7051dc',
          borderColor: '#fff',
          borderWidth: 4,
        },
      },
      tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    } as ChartOptions,
  },
};
