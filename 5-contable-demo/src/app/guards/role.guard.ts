import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {

  console.log(route, state);
  
  const authService = inject(AuthService);
  const router = inject(Router);

  const payload = authService.getPayload();
  console.log(payload);

  if (!payload) {
    router.navigate(['/']);
    return false;
  }

  
  
  return true
};
