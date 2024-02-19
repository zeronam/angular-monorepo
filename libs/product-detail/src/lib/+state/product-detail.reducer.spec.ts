import { Action } from '@ngrx/store';

import * as ProductDetailActions from './product-detail.actions';
import { ProductDetailEntity } from './product-detail.models';
import {
  ProductDetailState,
  initialProductDetailState,
  productDetailReducer,
} from './product-detail.reducer';

describe('ProductDetail Reducer', () => {
  const createProductDetailEntity = (
    id: string,
    name = ''
  ): ProductDetailEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid ProductDetail actions', () => {
    it('loadProductDetailSuccess should return the list of known ProductDetail', () => {
      const productDetail = [
        createProductDetailEntity('PRODUCT-AAA'),
        createProductDetailEntity('PRODUCT-zzz'),
      ];
      const action = ProductDetailActions.loadProductDetailSuccess({
        productDetail,
      });

      const result: ProductDetailState = productDetailReducer(
        initialProductDetailState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = productDetailReducer(initialProductDetailState, action);

      expect(result).toBe(initialProductDetailState);
    });
  });
});
