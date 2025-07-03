import { Routes } from '@angular/router';
import { TabNavigatorComponent } from './components/tab-navigator/tab-navigator.component';

export const routes: Routes = [ 
    {
        path: '', redirectTo: 'home', pathMatch: 'full' 
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    },
];