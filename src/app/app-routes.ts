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
    path: 'form',
    loadChildren: () =>
      import('./features/forms/forms-routes').then((m) => m.formRoutes),
  },
  {
    path: 'client',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then((c) => c.LandingPageComponent),
  },
  {
    path: '**',
    redirectTo: 'client',
  },
];
