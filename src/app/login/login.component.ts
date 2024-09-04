import {Component} from '@angular/core';
import {loginDto} from "../models/loginDto";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginModel: loginDto = {
    id: 0,
    username: '',
    password: ''
  }

  constructor(private loginService: AuthService, private router: Router) {
  }

  login() {
    if (this.loginModel.username != "" && this.loginModel.password != "") {

      this.loginService.login(this.loginModel).subscribe({
        next: () => {
          let jwt = localStorage.getItem('token')
          if (jwt) {
            this.router.navigateByUrl('/home')
          }
        }
      })
    }
  }
}
