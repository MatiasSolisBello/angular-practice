import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:5000/api/producto';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Producto[]>(this.url);
  }
}
