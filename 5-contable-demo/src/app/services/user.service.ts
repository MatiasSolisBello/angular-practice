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

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  
  getUsers():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url, { headers: this.getAuthHeaders() });
  }

  getUserById(_id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${_id}`, { headers: this.getAuthHeaders() });
  }

  createUser(data: any): Observable<any>{
    return this.http.post(this.url, data, { headers: this.getAuthHeaders() });
  }

  updateUser(_id: string, user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/${_id}`, user, { headers: this.getAuthHeaders() });
  }

  deleteUser(_id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${_id}`, { headers: this.getAuthHeaders() });
  }
}
