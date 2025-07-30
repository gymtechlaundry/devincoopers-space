import { Injectable } from '@angular/core';

export interface LoginResponse {
  jwtToken: string;
  username: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
