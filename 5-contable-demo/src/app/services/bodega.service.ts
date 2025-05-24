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
  
  getBodegas():Observable<Bodega[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.get<Bodega[]>(this.url, { headers });
  }
}
