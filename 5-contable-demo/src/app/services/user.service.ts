import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:5000/api/usuario';

  constructor(private http: HttpClient) {}
  
  getUsers():Observable<Usuario[]>{
    const token = localStorage.getItem('token'); // o donde lo tengas almacenado
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    
    return this.http.get<Usuario[]>(this.url, { headers });
  }
}
