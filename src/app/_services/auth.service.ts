import {Injectable} from '@angular/core';
import {HttpClient, HttpContext} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../environment/environment";
import {loginDto} from "../models/loginDto";
import {map} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(loginModel: loginDto) {
    return this.http.post<User>(
      `${this.url}auth/login`, loginModel).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('token', user.token)
          localStorage.setItem('userId', user.id.toString())
        }
      })
    )

  }
}
