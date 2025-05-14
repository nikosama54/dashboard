import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AjustesComponent } from './ajustes/ajustes.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'ajustes', component: AjustesComponent }
];
