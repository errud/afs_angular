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

    private _authService : AuthService,
    private _router : Router,
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginFG = this._builder.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]],
    })
  }

  onSubmit() {

     const values = this.loginFG.value;

    this._authService.login(values['email'], values['password'])
  }

}
