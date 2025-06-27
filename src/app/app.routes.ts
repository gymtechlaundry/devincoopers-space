import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'education',
        loadComponent: () => import('./components/education/education.component').then(m => m.EducationComponent)
    },
    {
        path: 'experience',
        loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
