import { Routes } from '@angular/router';

export const applicationDetailsRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./application-details.component').then((m) => m.ApplicationDetailsComponent),
    },
    {
        path: ':type',
        loadComponent: () =>
          import('./application-details.component').then((m) => m.ApplicationDetailsComponent),
    }
];
