import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@angular-monorepo/product-list').then((m) => m.productListRoutes),
  },
  {
    path: 'product/:categoryName',
    loadChildren: () => import('@angular-monorepo/product-detail').then((m) => m.productDetailRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@angular-monorepo/auth/form').then((m) => m.authFormRoutes),
  },
];
