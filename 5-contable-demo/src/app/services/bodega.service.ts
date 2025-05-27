import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bodega } from '../models/Bodega';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  private url: string = 'http://localhost:5000/api/bodega';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  
  getBodegas():Observable<Bodega[]>{    
    return this.http.get<Bodega[]>(this.url, { headers: this.getAuthHeaders() });
  }

  getBodegaById(_id: string): Observable<Bodega> {
    return this.http.get<Bodega>(
      `${this.url}/${_id}`, 
      { headers: this.getAuthHeaders() }
    );
  }

  createBodega(data: any): Observable<any>{
    return this.http.post(this.url, data, { headers: this.getAuthHeaders() });
  }

  updateBodega(_id: string, bodega: Bodega): Observable<Bodega>{
    console.log(`${this.url}/${_id}`);
    return this.http.put<Bodega>(
      `${this.url}/${_id}`, bodega, 
      { headers: this.getAuthHeaders() }
    );
  }

  deleteBodega(_id: string): Observable<void> {
    return this.http.delete<void>(
      `${this.url}/${_id}`, { headers: this.getAuthHeaders() }
    );
  }
}
