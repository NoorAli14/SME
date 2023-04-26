import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/features-routes').then((m) => m.featuresRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
