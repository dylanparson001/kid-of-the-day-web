import {CanActivateFn, Router} from '@angular/router';
import {Inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token');
  let router = Inject(Router);

  if (token != '' && token != null ) {
    return true;
  }

  router.navigate(['/login'])
  return false
};
