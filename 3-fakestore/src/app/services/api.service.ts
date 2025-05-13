import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase: string = 'https://fakestoreapi.com/products';

  constructor(private _http: HttpClient){ }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }

  getProduct(id: number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.urlBase}/${id}`);
  }

  getAllCategories(): Observable<string[]> {
    return this._http.get<string[]>(`${this.urlBase}/categories`);
  }

  getProductsByCategory(category: string): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this.urlBase}/category/${category}`);
  }
}
