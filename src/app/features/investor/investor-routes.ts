import { Routes } from '@angular/router';

export const investorRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'marketplace',
    loadComponent: () =>
      import('./market-place/market-place.component').then(
        (c) => c.MarketPlaceComponent
      ),
  },
  {
    path: 'application-manager',
    loadComponent: () =>
      import('./application-manager/application-manager.component').then(
        (c) => c.ApplicationManagerComponent
      ),
  },
  {
    path: 'product-management',
    loadComponent: () =>
      import('./product-management/product-management.component').then(
        (c) => c.ProductManagementComponent
      ),
  },
  {
    path: 'finance-calculator',
    loadComponent: () =>
      import('./finance-calculator/finance-calculator.component').then(
        (c) => c.FinanceCalculatorComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
