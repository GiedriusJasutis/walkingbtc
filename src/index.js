import './style.scss';
import { chart } from './chart.js';
import { createSocket } from './socket.js';

// Create data stream socket
const dataStream = createSocket('btcusdt', '1m');

// chart stream step lenght
let chartLenght = 15;
const candlePrices = [];
const labels = [];
dataStream.onmessage = (e) => {
  const candle = JSON.parse(e.data);
  const price = candle.k.c;

  candlePrices.push(parseFloat(price));
  labels.push(price);

  // push label
  chart.data.labels.push('.');
  // push data
  chart.data.datasets.forEach((item) => {
    item.data.push(parseFloat(price));
  });
  // update chart
  chart.update();

  if (candlePrices.length > chartLenght && labels.length > chartLenght) {
    candlePrices.shift();
    labels.shift();

    // push label
    chart.data.labels.shift();
    // push data
    chart.data.datasets.forEach((item) => {
      item.data.shift();
    });
    // update chart
    chart.update();
  }
};
