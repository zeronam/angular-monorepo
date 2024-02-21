import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProductListActions from './product-list.actions';
import { ProductListEntity } from './product-list.models';

export const PRODUCT_LIST_FEATURE_KEY = 'productList';

export interface ProductListState extends EntityState<ProductListEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface ProductListPartialState {
  readonly [PRODUCT_LIST_FEATURE_KEY]: ProductListState;
}

export const productListAdapter: EntityAdapter<ProductListEntity> =
  createEntityAdapter<ProductListEntity>();

export const initialProductListState: ProductListState =
  productListAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialProductListState,
  on(ProductListActions.initProductList, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProductListActions.loadProductListSuccess, (state, { productList }) =>
    productListAdapter.setAll(productList, { ...state, loaded: true })
  ),
  on(ProductListActions.loadProductListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function productListReducer(
  state: ProductListState | undefined,
  action: Action
) {
  return reducer(state, action);
}
