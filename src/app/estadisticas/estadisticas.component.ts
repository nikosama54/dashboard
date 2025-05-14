import { Component } from '@angular/core';
import { ChartComponent } from "../dashboard/chart/chart.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [ChartComponent, ChartComponent, NgIf],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.scss'
})
export class EstadisticasComponent {
  isDataLoaded = false;
  chartData: any;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // Simula la carga de data, por ejemplo, usando un setTimeout o una llamada API
    setTimeout(() => {
      this.chartData = { /* Datos del gráfico */ };
      this.isDataLoaded = true; // Cuando los datos estén cargados
    }, 2000); // Simula 2 segundos de carga
  }
}
