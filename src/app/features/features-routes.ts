import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features.component').then((m) => m.FeaturesComponent),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./borrower/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'compare-offers',
        loadComponent: () =>
          import('./borrower/home/compare-offers/compare-offers.component').then(
            (c) => c.CompareOffersComponent
          ),
      },
      {
        path: 'company-information',
        loadComponent: () =>
          import('./borrower/company-information/company-information.component').then(
            (c) => c.CompanyInformationComponent
          ),
      },
      {
        path: 'finance-application',
        loadComponent: () =>
          import('./borrower/finance-application/finance-application.component').then(
            (c) => c.FinanceApplicationComponent
          ),
      },
      {
        path: 'finance-marketplace',
        loadComponent: () =>
          import('./borrower/finance-marketplace/finance-marketplace.component').then(
            (c) => c.FinanceMarketplaceComponent
          ),
      },
      {
        path: 'finance-calculator',
        loadComponent: () =>
          import('./borrower/finance-calculator/finance-calculator.component').then(
            (c) => c.FinanceCalculatorComponent
          ),
      },
      {
        path: 'investor',
        loadChildren: () =>
          import('./investor/investor-routes').then((m) => m.investorRoutes),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
