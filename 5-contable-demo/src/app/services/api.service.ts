import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  login(data: { correo: string; clave: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
