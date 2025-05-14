import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'age'];
  data = [
    { name: 'John Doe', age: 35 },
    { name: 'Jane Doe', age: 28 },
    { name: 'Sam Smith', age: 22 }
  ];
}
