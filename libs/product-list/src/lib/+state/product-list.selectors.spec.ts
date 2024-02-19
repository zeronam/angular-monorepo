import { ProductListEntity } from './product-list.models';
import {
  productListAdapter,
  ProductListPartialState,
  initialProductListState,
} from './product-list.reducer';
import * as ProductListSelectors from './product-list.selectors';

describe('ProductList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProductListId = (it: ProductListEntity) => it.id;
  const createProductListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ProductListEntity);

  let state: ProductListPartialState;

  beforeEach(() => {
    state = {
      productList: productListAdapter.setAll(
        [
          createProductListEntity('PRODUCT-AAA'),
          createProductListEntity('PRODUCT-BBB'),
          createProductListEntity('PRODUCT-CCC'),
        ],
        {
          ...initialProductListState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ProductList Selectors', () => {
    it('selectAllProductList() should return the list of ProductList', () => {
      const results = ProductListSelectors.selectAllProductList(state);
      const selId = getProductListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ProductListSelectors.selectEntity(
        state
      ) as ProductListEntity;
      const selId = getProductListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectProductListLoaded() should return the current "loaded" status', () => {
      const result = ProductListSelectors.selectProductListLoaded(state);

      expect(result).toBe(true);
    });

    it('selectProductListError() should return the current "error" state', () => {
      const result = ProductListSelectors.selectProductListError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
