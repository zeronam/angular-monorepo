import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as ProductListActions from './product-list.actions';
import { ProductsService } from '@angular-monorepo/shared/data-access/product-api';

@Injectable()
export class ProductListEffects {
  constructor(    
    private productsService: ProductsService
  ) {}

  private actions$ = inject(Actions);

  getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductListActions.initProductList),
      switchMap(() => {
        return this.productsService.getProductList().pipe(
          map((products: any) => ProductListActions.loadProductListSuccess({ productList: products.data })),
          catchError(error => of(ProductListActions.loadProductListFailure({error})))
        );
      })
    )
  );
}
