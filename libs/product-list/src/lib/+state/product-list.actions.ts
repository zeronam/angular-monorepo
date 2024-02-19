import { createAction, props } from '@ngrx/store';
import { ProductListEntity } from './product-list.models';

export const initProductList = createAction('[ProductList Page] Init');

export const loadProductListSuccess = createAction(
  '[ProductList/API] Load ProductList Success',
  props<{ productList: ProductListEntity[] }>()
);

export const loadProductListFailure = createAction(
  '[ProductList/API] Load ProductList Failure',
  props<{ error: any }>()
);
