import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:5000/api/producto';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  getProducts() {
    return this.http.get<Producto[]>(this.url);
  }

  createProduct(data: any): Observable<any>{
    return this.http.post(this.url, data, { headers: this.getAuthHeaders() });
  }
}
