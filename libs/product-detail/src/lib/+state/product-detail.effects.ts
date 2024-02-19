import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ProductDetailActions from './product-detail.actions';
import * as ProductDetailFeature from './product-detail.reducer';

@Injectable()
export class ProductDetailEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductDetailActions.initProductDetail),
      switchMap(() =>
        of(ProductDetailActions.loadProductDetailSuccess({ productDetail: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductDetailActions.loadProductDetailFailure({ error }));
      })
    )
  );
}
