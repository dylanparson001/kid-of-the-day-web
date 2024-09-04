import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  let jwt = localStorage.getItem('token');
  let router = inject(Router);

  if (jwt) {
    req = req.clone( {
      headers: req.headers.set('Authorization', `Bearer ${jwt}`)
    })
  }

  return next(req);
};
