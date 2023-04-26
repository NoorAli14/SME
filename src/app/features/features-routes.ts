import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features.component').then((m) => m.FeaturesComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full',
      },
    ],
  },
];
