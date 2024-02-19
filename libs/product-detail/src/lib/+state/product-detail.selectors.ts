import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRODUCT_DETAIL_FEATURE_KEY,
  ProductDetailState,
  productDetailAdapter,
} from './product-detail.reducer';

// Lookup the 'ProductDetail' feature state managed by NgRx
export const selectProductDetailState =
  createFeatureSelector<ProductDetailState>(PRODUCT_DETAIL_FEATURE_KEY);

const { selectAll, selectEntities } = productDetailAdapter.getSelectors();

export const selectProductDetailLoaded = createSelector(
  selectProductDetailState,
  (state: ProductDetailState) => state.loaded
);

export const selectProductDetailError = createSelector(
  selectProductDetailState,
  (state: ProductDetailState) => state.error
);

export const selectAllProductDetail = createSelector(
  selectProductDetailState,
  (state: ProductDetailState) => selectAll(state)
);

export const selectProductDetailEntities = createSelector(
  selectProductDetailState,
  (state: ProductDetailState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectProductDetailState,
  (state: ProductDetailState) => state.selectedId
);

export const selectEntity = createSelector(
  selectProductDetailEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
