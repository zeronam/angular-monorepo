import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ProductDetailActions from './product-detail.actions';
import { ProductDetailEffects } from './product-detail.effects';
import { provideHttpClient } from '@angular/common/http';

describe('ProductDetailEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductDetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductDetailEffects,
        provideHttpClient(),
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProductDetailEffects);
  });

  xdescribe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProductDetailActions.initProductDetail({productId: 'test'}) });

      const expected = hot('-a-|', {
        a: ProductDetailActions.loadProductDetailSuccess({ productDetail: [] }),
      });

      expect(effects.getProductList$).toBeObservable(expected);
    });
  });
});
