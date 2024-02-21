import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';

import * as ProductListActions from '../+state/product-list.actions';
import * as ProductListSelectors from '../+state/product-list.selectors';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'angular-monorepo-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products$: Observable<any> = this.store$.pipe(
    select(ProductListSelectors.selectProductListEntities),
    map(entity => Object.values(entity)));

  constructor(
    private store$: Store
  ) {}

  ngOnInit(): void {
    this.store$.dispatch(ProductListActions.initProductList());
  }
}
