import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, ChartOptions } from 'chart.js';
import commonjs from 'rollup-plugin-commonjs';


@Component({
  selector: 'app-dashboardCa',
  templateUrl: './dashboardCa.component.html',
  styleUrls: ['./dashboardCa.component.css']
})
export class DashboardCaComponent implements OnInit {
  selectedCategory: string = '';
  myChart: Chart = {} as Chart; // Initialisation

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const chartType: ChartType = 'doughnut';
    const chartOptions: ChartOptions = {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        }
      }
    };

    this.myChart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'],
        datasets: [
          {
            data: [3000, 2000, 1500],
            backgroundColor: ['red', 'green', 'blue'],
          },
        ],
      },
      options: chartOptions
    });
  }
}

