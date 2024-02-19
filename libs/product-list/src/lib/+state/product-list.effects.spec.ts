import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ProductListActions from './product-list.actions';
import { ProductListEffects } from './product-list.effects';

describe('ProductListEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductListEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProductListEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProductListActions.initProductList() });

      const expected = hot('-a-|', {
        a: ProductListActions.loadProductListSuccess({ productList: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
