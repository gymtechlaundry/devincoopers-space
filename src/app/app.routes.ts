import { Routes } from '@angular/router';
import { adminGuard } from './services/admin.guard';

export const routes: Routes = [ 
    {
        path: '', redirectTo: 'home', pathMatch: 'full' 
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin.dashboard/admin.dashboard.component').then(m => m.AdminDashboardComponent),
        canActivate: [adminGuard],
    },
    {
        path: 'admin-login',
        loadComponent: () => import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent),
    },
];