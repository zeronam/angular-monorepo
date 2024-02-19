import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCT_LIST_FEATURE_KEY,
  ProductListState,
  productListAdapter,
} from './product-list.reducer';

// Lookup the 'ProductList' feature state managed by NgRx
export const selectProductListState = createFeatureSelector<ProductListState>(
  PRODUCT_LIST_FEATURE_KEY
);

const { selectAll, selectEntities } = productListAdapter.getSelectors();

export const selectProductListLoaded = createSelector(
  selectProductListState,
  (state: ProductListState) => state.loaded
);

export const selectProductListError = createSelector(
  selectProductListState,
  (state: ProductListState) => state.error
);

export const selectAllProductList = createSelector(
  selectProductListState,
  (state: ProductListState) => selectAll(state)
);

export const selectProductListEntities = createSelector(
  selectProductListState,
  (state: ProductListState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectProductListState,
  (state: ProductListState) => state.selectedId
);

export const selectEntity = createSelector(
  selectProductListEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
