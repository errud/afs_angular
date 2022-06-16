import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFG : FormGroup

  constructor(
    private _auth : AuthService,
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

     const values = this.loginFG.value;

    this._authService.login(values['email'], values['password'])
  }

}
