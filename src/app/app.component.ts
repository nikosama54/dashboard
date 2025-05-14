import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Importa RouterModule para usar rutas
  template: `
    <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="logo">Gestion</h2>
      <nav>
        <ul>
        <li><a routerLink="/" routerLinkActive="active">Inicio</a></li>
          <li><a routerLink="/usuarios" routerLinkActive="active">Usuarios</a></li>
          <li><a routerLink="/estadisticas" routerLinkActive="active">Estadísticas</a></li>          
        </ul>
      </nav>
    </aside>
  
    <!-- Contenido principal -->
    <div class="main-content">
      <!-- Topbar -->
      <header class="topbar">
        <h1>Panel de Control</h1>
        <div class="user-info">Usuario</div>
      </header>
  
      <!-- Área dinámica -->
      <section class="content">        
      <div class="content">
      <router-outlet></router-outlet>
    </div>
      </section>
    </div>
  </div>
  
    
    
  `,
})
export class AppComponent { }
