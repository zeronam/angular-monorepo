import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from './models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly baseUrl = 'https://nodejs-todo-9emm.onrender.com/';

  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}product/list`);
  }

  getProductDetail(productId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}product/${productId}`);
  }
}