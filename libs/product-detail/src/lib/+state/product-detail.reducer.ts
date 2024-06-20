import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductDetailActions from './product-detail.actions';
import { ProductDetailEntity } from './product-detail.models';

export const PRODUCT_DETAIL_FEATURE_KEY = 'productDetail';

export interface ProductDetailState extends EntityState<ProductDetailEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  productDetail: any;
}

export interface ProductDetailPartialState {
  readonly [PRODUCT_DETAIL_FEATURE_KEY]: ProductDetailState;
}

export const productDetailAdapter: EntityAdapter<ProductDetailEntity> =
  createEntityAdapter<ProductDetailEntity>();

export const initialProductDetailState: ProductDetailState =
  productDetailAdapter.getInitialState({
    loaded: false,
    productDetail: null
  });

const reducer = createReducer(
  initialProductDetailState,
  on(ProductDetailActions.initProductDetail, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    ProductDetailActions.loadProductDetailSuccess,
    (state, { productDetail }) =>
    ({ ...state, productDetail })
  ),
  on(ProductDetailActions.loadProductDetailFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function productDetailReducer(
  state: ProductDetailState | undefined,
  action: Action
) {
  return reducer(state, action);
}
