import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatFormFieldModule,MatInputModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  columnas: string[] = ['nombre', 'correo', 'rol'];

  usuariosData = [
    { nombre: 'Juan Pérez', correo: 'juan@example.com', rol: 'Admin' },
    { nombre: 'Laura Gómez', correo: 'laura@example.com', rol: 'Usuario' },
    { nombre: 'Carlos Ruiz', correo: 'carlos@example.com', rol: 'Moderador' },
    { nombre: 'Ana Torres', correo: 'ana@example.com', rol: 'Usuario' }
  ];

  dataSource = new MatTableDataSource(this.usuariosData);

  aplicarFiltro(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
