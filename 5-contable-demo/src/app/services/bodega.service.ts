import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bodega } from '../models/Bodega';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  private url: string = 'http://localhost:5000/api/bodega';

  constructor(private http: HttpClient,
    private _authService: AuthService
  ) {}
  
  getBodegas():Observable<Bodega[]>{    
    return this.http.get<Bodega[]>(this.url, { headers: this._authService.getAuthHeaders() });
  }

  getBodegaById(_id: string): Observable<Bodega> {
    return this.http.get<Bodega>(
      `${this.url}/${_id}`, 
      { headers: this._authService.getAuthHeaders() }
    );
  }

  createBodega(data: any): Observable<any>{
    return this.http.post(this.url, data, { headers: this._authService.getAuthHeaders() });
  }

  updateBodega(_id: string, bodega: Bodega): Observable<Bodega>{
    return this.http.put<Bodega>(
      `${this.url}/${_id}`, bodega, 
      { headers: this._authService.getAuthHeaders() }
    );
  }

  deleteBodega(_id: string): Observable<void> {
    return this.http.delete<void>(
      `${this.url}/${_id}`, { headers: this._authService.getAuthHeaders() }
    );
  }
}
