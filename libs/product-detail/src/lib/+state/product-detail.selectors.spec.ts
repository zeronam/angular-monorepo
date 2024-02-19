import { ProductDetailEntity } from './product-detail.models';
import {
  productDetailAdapter,
  ProductDetailPartialState,
  initialProductDetailState,
} from './product-detail.reducer';
import * as ProductDetailSelectors from './product-detail.selectors';

describe('ProductDetail Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductDetailId = (it: ProductDetailEntity) => it.id;
  const createProductDetailEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ProductDetailEntity);

  let state: ProductDetailPartialState;

  beforeEach(() => {
    state = {
      productDetail: productDetailAdapter.setAll(
        [
          createProductDetailEntity('PRODUCT-AAA'),
          createProductDetailEntity('PRODUCT-BBB'),
          createProductDetailEntity('PRODUCT-CCC'),
        ],
        {
          ...initialProductDetailState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ProductDetail Selectors', () => {
    it('selectAllProductDetail() should return the list of ProductDetail', () => {
      const results = ProductDetailSelectors.selectAllProductDetail(state);
      const selId = getProductDetailId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ProductDetailSelectors.selectEntity(
        state
      ) as ProductDetailEntity;
      const selId = getProductDetailId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectProductDetailLoaded() should return the current "loaded" status', () => {
      const result = ProductDetailSelectors.selectProductDetailLoaded(state);

      expect(result).toBe(true);
    });

    it('selectProductDetailError() should return the current "error" state', () => {
      const result = ProductDetailSelectors.selectProductDetailError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
