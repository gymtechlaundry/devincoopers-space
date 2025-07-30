import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';

export interface LoginResponse {
  jwtToken: string;
  username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'x-api-key': environment.apiKey
    });

    return this.http.post<{ jwtToken: string }>(`${this.baseUrl}/auth/login`, {
      username,
      password,
    }, { headers }).pipe(
      tap(response => {
        console.log(response.jwtToken)
        localStorage.setItem(this.TOKEN_KEY, response.jwtToken);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}
