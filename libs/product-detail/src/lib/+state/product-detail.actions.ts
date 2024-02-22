import { createAction, props } from '@ngrx/store';
import { ProductDetailEntity } from './product-detail.models';

export const initProductDetail = createAction(
  '[ProductDetail Page] Init',
  props<{ productId: any }>()
);

export const loadProductDetailSuccess = createAction(
  '[ProductDetail/API] Load ProductDetail Success',
  props<{ productDetail: any }>()
);

export const loadProductDetailFailure = createAction(
  '[ProductDetail/API] Load ProductDetail Failure',
  props<{ error: any }>()
);
