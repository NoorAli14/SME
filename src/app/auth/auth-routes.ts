import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth.component').then((m) => m.AuthComponent),
    children: [
      // {
      //   path: 'signup',
      //   loadComponent: () =>
      //     import('./signup/signup.component').then(
      //       (c) => c.SignupComponent
      //     ),
      // },
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
        path: 'otp/:screen',
        loadComponent: () =>
          import('./common/otp/otp.component').then(
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
        path: 'investor-signup',
        loadComponent: () =>
          import('./investor-signup/sign-up-as-investor/sign-up-as-investor.component').then(
            (c) => c.SignUpAsInvestorComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./investor-signup/signup/signup.component').then(
            (c) => c.SignupComponent
          ),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('./investor-signup/change-password/change-password.component').then(
            (c) => c.ChangePasswordComponent
          ),
      },
      {
        path: 'add-user',
        loadComponent: () =>
          import('./investor-signup/add-user/add-user.component').then(
            (c) => c.AddUserComponent
          ),
      },
      {
        path: 'complete-profile',
        loadComponent: () =>
          import('./common/complete-profile/complete-profile.component').then(
            (c) => c.CompleteProfileComponent
          ),
      },
      {
        path: 'complete-profile-address',
        loadComponent: () =>
          import('./common/correspondence-address/correspondence-address.component').then(
            (c) => c.CorrespondenceAddressComponent
          ),
      },
      {
        path: 'complete-profile-address-ownership',
        loadComponent: () =>
          import('./common/ownership/ownership.component').then(
            (c) => c.OwnershipComponent
          ),
      },
      {
        path: 'complete-profile-address-ownership-financial-information',
        loadComponent: () =>
          import('./common/financial-information/financial-information.component').then(
            (c) => c.FinancialInformationComponent
          ),
      },
      {
        path: '',
        redirectTo: 'choose-signup-option',
        pathMatch: 'full',
      },
    ],
  },
];
