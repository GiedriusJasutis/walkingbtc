const data = [];
export const config = {
  responsive: true,
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'BTC',
        data: data,
        backgroundColor: ['gold'],
        borderColor: ['black'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 30,
          },
        },
      },
      title: {
        display: true,
        text: 'Walking Bitcoin $',
        font: {
          size: 40,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
      },
    },
  },
};
