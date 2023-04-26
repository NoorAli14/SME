import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'signup',
        loadComponent: () =>
          import('./signup/signup.component').then(
            (c) => c.SignupComponent
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
