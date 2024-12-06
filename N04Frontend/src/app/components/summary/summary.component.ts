import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  chart: any;

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const data = {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'Healthcare',
          data: [15, 20, 25, 30, 35],
          borderColor: '#4CAF50',
          fill: false
        },
        {
          label: 'Finance',
          data: [10, 15, 20, 25, 30],
          borderColor: '#FF5722',
          fill: false
        },
        {
          label: 'Retail',
          data: [8, 12, 18, 22, 28],
          borderColor: '#2196F3',
          fill: false
        }
      ]
    };

    this.chart = new Chart('aiIndustryChart', {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Generative AI Adoption Trends by Industry (2020–2024)'
          }
        }
      }
    });
  }
}