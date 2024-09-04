import { Component } from '@angular/core';
import {loginDto} from "../models/loginDto";

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


  login() {
    alert('what up')
    console.log('got here')
    console.log(this.loginModel)
  }
}
