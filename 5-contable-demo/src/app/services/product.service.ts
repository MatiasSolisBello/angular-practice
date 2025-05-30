import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'http://localhost:5000/api/producto';

  constructor(private http: HttpClient, private _authService: AuthService) { }

  getProducts() {
    return this.http.get<Producto[]>(this.url);
  }

  createProduct(data: any): Observable<any>{
    return this.http.post(this.url, data, { headers: this._authService.getAuthHeaders() });
  }
}
