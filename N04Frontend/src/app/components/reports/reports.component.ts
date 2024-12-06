import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-summary',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    // Data for the chart
    const data = {
      labels: ['2020', '2021', '2022', '2023', '2024'], // Year labels
      datasets: [
        {
          label: 'GPT-2',
          data: [75, 80, 85, 90, 90], // GPT-2 data
          borderColor: '#FFC107',
          backgroundColor: '#FFEB3B',
          fill: false
        },
        {
          label: 'GPT-3',
          data: [85, 88, 91, 94, 96], // GPT-3 data
          borderColor: '#4CAF50',
          backgroundColor: '#81C784',
          fill: false
        },
        {
          label: 'GPT-4',
          data: [90, 92, 95, 97, 98], // GPT-4 data
          borderColor: '#2196F3',
          backgroundColor: '#64B5F6',
          fill: false
        }
      ]
    };

    // Create the chart
    this.chart = new Chart('aiEfficiencyChart', {
      type: 'bubble',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Generative AI Model Efficiency Trends (2020-2024)'
          }
        }
      }
    });
  }
}