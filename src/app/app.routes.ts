import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { DataTableComponent } from './pages/data-table/data-table.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
  { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil'} },
  { path: 'register', component: RegisterComponent, data: { titulo: 'Registros'} },
  { path: 'data', component: DataTableComponent, data: { titulo: 'Registros'} },
  { path: '**', component: DashboardComponent, data: { titulo: 'Dashboard'} }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
