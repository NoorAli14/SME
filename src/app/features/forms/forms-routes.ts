import { Routes } from '@angular/router';

export const formRoutes: Routes = [
  {
    path: 'finance-application/:screen',
    loadComponent: () =>
      import('./finance-application/new-finance-application/new-finance-application.component').then(
        (c) => c.NewFinanceApplicationComponent
      ),
  },
  {
    path: 'finance-application-eligibility',
    loadComponent: () =>
      import('./finance-application/application-eligibility-check/application-eligibility-check.component').then(
        (c) => c.ApplicationEligibilityCheckComponent
      ),
  },
  {
    path: 'review-application',
    loadComponent: () =>
      import('./finance-application/review-application/review-application.component').then(
        (c) => c.ReviewApplicationComponent
      ),
  },
  {
    path: 'finance-application-submitted',
    loadComponent: () =>
      import('./finance-application/finance-application-submitted/finance-application-submitted.component').then(
        (c) => c.FinanceApplicationSubmittedComponent
      ),
  },
  {
    path: 'select-product',
    loadComponent: () =>
      import('./new-product/select-product/select-product.component').then(
        (c) => c.SelectProductComponent
      ),
  },
  {
    path: 'product-details',
    loadComponent: () =>
      import('./new-product/product-details/product-details.component').then(
        (c) => c.ProductDetailsComponent
      ),
  },
  {
    path: 'eligibility-details',
    loadComponent: () =>
      import('./new-product/eligibility-details/eligibility-details.component').then(
        (c) => c.EligibilityDetailsComponent
      ),
  },
  {
    path: 'review',
    loadComponent: () =>
      import('./new-product/review/review.component').then(
        (c) => c.ReviewComponent
      ),
  },
  {
    path: 'published',
    loadComponent: () =>
      import('./new-product/published/published.component').then(
        (c) => c.PublishedComponent
      ),
  },
  {
    path: 'invoice-finance-application',
    loadComponent: () =>
      import('./invoice-finance-application/invoice-finance-application.component').then(
        (c) => c.InvoiceFinanceApplicationComponent
      ),
  },
  {
    path: 'invoice-review-application',
    loadComponent: () =>
      import('./invoice-review-application/invoice-review-application.component').then(
        (c) => c.InvoiceReviewApplicationComponent
      ),
  },
 
  
  
];
