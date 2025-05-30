import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:5000/api/usuario';

  constructor(private http: HttpClient, private _authService: AuthService) {}
  
  getUsers():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(
      this.url, { headers: this._authService.getAuthHeaders() }
    );
  }

  getUserById(_id: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${this.url}/${_id}`, { headers: this._authService.getAuthHeaders() }
    );
  }

  createUser(data: any): Observable<any>{
    return this.http.post(
      this.url, data, { headers: this._authService.getAuthHeaders() }
    );
  }

  updateUser(_id: string, user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(
      `${this.url}/${_id}`, user, { headers: this._authService.getAuthHeaders() }
    );
  }

  deleteUser(_id: string): Observable<void> {
    return this.http.delete<void>(
      `${this.url}/${_id}`, { headers: this._authService.getAuthHeaders() }
    );
  }
}
