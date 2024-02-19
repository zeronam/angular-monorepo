import { Route } from '@angular/router';
import { ProductListComponent } from './components/product-list.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromProductList from './+state/product-list.reducer';
import { ProductListEffects } from './+state/product-list.effects';

export const productListRoutes: Route[] = [
  {
    path: '',
    component: ProductListComponent,
    providers: [
      provideState(
        fromProductList.PRODUCT_LIST_FEATURE_KEY,
        fromProductList.productListReducer
      ),
      provideEffects(ProductListEffects),
    ],
  },
];
