import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {  
  const auth = inject(AuthService);
  const router = inject(Router);

  const expectedRoles = route.data?.['roles'] as string[];
  const userRole = auth.getRole();

  if (!auth.isAuthenticated()) {
    router.navigate(['/']);
    return false;
  }

  if (!userRole || (expectedRoles && !expectedRoles.includes(userRole))) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
