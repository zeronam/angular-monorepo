import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as ProductDetailActions from './product-detail.actions';
import { ProductsService } from '@angular-monorepo/shared/data-access/product-api';

@Injectable()
export class ProductDetailEffects {
  private actions$ = inject(Actions);

  constructor(    
    private productsService: ProductsService
  ) {}

  getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductDetailActions.initProductDetail),
      switchMap(_ => {
        return this.productsService.getProductDetail(_.productId).pipe(
          map((product: any) => ProductDetailActions.loadProductDetailSuccess({ productDetail: product })),
          catchError(error => of(ProductDetailActions.loadProductDetailFailure({error})))
        );
      })
    )
  );
}
