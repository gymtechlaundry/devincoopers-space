import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path: '', redirectTo: 'home', pathMatch: 'full' 
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
     {
        path: 'admin-login',
        loadComponent: () => import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent),
    },
];