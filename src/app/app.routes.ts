import { Routes } from '@angular/router';
import { adminGuard } from './services/admin.guard';
import { PortfolioAdminComponent } from './pages/portfolio-admin/portfolio-admin.component';
import { BingoAdminComponent } from './pages/bingo-admin/bingo-admin.component';

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
        children: [
            {
                path: 'portfolio-admin',
                component: PortfolioAdminComponent,
                outlet: 'sidenav'
            },
            {
                path: 'bingo-admin',
                component: BingoAdminComponent,
                outlet: 'sidenav'
            },
        ]
    },
    {
        path: 'admin-login',
        loadComponent: () => import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent),
    },
];