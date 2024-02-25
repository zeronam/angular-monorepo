import { Route } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromProductDetail from './+state/product-detail.reducer';
import { ProductDetailEffects } from './+state/product-detail.effects';

export const productDetailRoutes: Route[] = [
  {
    path: '',
    component: ProductDetailComponent,
    providers: [
      provideState(
        fromProductDetail.PRODUCT_DETAIL_FEATURE_KEY,
        fromProductDetail.productDetailReducer
      ),
      provideEffects(ProductDetailEffects),
    ],
  },
];
