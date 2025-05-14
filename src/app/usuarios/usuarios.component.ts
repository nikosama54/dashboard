import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatFormFieldModule,MatInputModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
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
