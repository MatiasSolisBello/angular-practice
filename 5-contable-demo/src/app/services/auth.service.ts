import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getPayload(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const payloadBase64 = token.split('.')[1];
      const payloadDecoded = atob(payloadBase64);
      return JSON.parse(payloadDecoded);
    } catch (e) {
      console.error('Error al decodificar el token:', e);
      return null;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
