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
        path: 'choose-signup-option',
        loadComponent: () =>
          import('./choose_signup/choose_signup.component').then(
            (c) => c.ChooseSignupComponent
          ),
      },
      {
        path: 'company-signup',
        loadComponent: () =>
          import('./company-signup/company-signup.component').then(
            (c) => c.CompanySignupComponent
          ),
      },
      {
        path: 'investor-signup',
        loadComponent: () =>
          import('./investor-signup/investor-signup.component').then(
            (c) => c.InvestorSignupComponent
          ),
      },
      {
        path: 'signup-with-abshar',
        loadComponent: () =>
          import('./company-signup/signup-with-abshar/signup-with-abshar.component').then(
            (c) => c.SignupWithAbsharComponent
          ),
      },
      {
        path: 'signup-with-email',
        loadComponent: () =>
          import('./company-signup/signup-with-email/signup-with-email.component').then(
            (c) => c.SignupWithEmailComponent
          ),
      },
      {
        path: 'otp',
        loadComponent: () =>
          import('./company-signup/otp/otp.component').then(
            (c) => c.OtpComponent
          ),
      },
      {
        path: 'setup-login-credentials',
        loadComponent: () =>
          import('./company-signup/setup-login-creds/setup-login-creds.component').then(
            (c) => c.SetupLoginCredsComponent
          ),
      },
      {
        path: 'required-consents',
        loadComponent: () =>
          import('./company-signup/required-consents/required-consents.component').then(
            (c) => c.RequiredConsentsComponent
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
