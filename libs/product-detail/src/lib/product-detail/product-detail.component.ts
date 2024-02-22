import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import * as ProductDetailActions from '../+state/product-detail.actions';
import * as ProductListSelectors from '../+state/product-detail.selectors';

@Component({
  selector: 'angular-monorepo-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  productsDetail$: Observable<any> = this.store$.pipe(
    select(ProductListSelectors.selectProductDetail));

  constructor(
    private store$: Store,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.store$.dispatch(ProductDetailActions.initProductDetail({ productId: params.categoryName }));
    });
  }
}
