import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ProductListActions from './product-list.actions';
import * as ProductListFeature from './product-list.reducer';

@Injectable()
export class ProductListEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListActions.initProductList),
      switchMap(() =>
        of(ProductListActions.loadProductListSuccess({ productList: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductListActions.loadProductListFailure({ error }));
      })
    )
  );
}
