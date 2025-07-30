import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { jwtDecode } from 'jwt-decode';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('auth_token');

  if (!token) {
    return router.parseUrl('/admin-login');
  }

  try {
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    if (decoded.roles?.includes('ROLE_ADMIN')) {
      return true;
    }
  } catch (e) {}

  return router.parseUrl('/admin-login');


}
