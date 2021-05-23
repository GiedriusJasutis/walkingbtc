import { config } from './config.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
Chart.defaults.font.size = 20;

var ctx = document.getElementById('myChart').getContext('2d');
export const chart = new Chart(ctx, config);
