import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardCi',
  templateUrl: './dashboardCi.component.html',
  styleUrls: ['./dashboardCi.component.css']
})
export class DashboardCIComponent implements OnInit {
  public benefice: number = 0;
  public impotSocietes: number = 0;
  public single: any[] = []; // Ajoutez cette ligne pour initialiser la propriété single

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80], label: 'Série A' },
    { data: [28, 48, 40], label: 'Série B' }
  ];

  // Ajoutez les propriétés ici
  public isDoughnut: boolean = true;
  public showXAxis: boolean = true;
  public showYAxis: boolean = true;
  public showLegend: boolean = true;
  public showXAxisLabel: boolean = true;
  public showYAxisLabel: boolean = true;
  public xAxisLabel: string = 'X-Axis Label';
  public yAxisLabel: string = 'Y-Axis Label';
  

  constructor() {}

  ngOnInit() {
    // Initialisation ou traitement supplémentaire si nécessaire
  }
}
