import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConnectedUser } from '../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = environment.baseAdres;


  connectedUser : ConnectedUser;


  get isConnected(): boolean {
    return localStorage.getItem('token') != null ? true : false
  }

  isConnectedSubject : Subject<boolean> = new Subject<boolean>();
  connectedUserSubject : Subject<ConnectedUser> = new Subject<ConnectedUser>();

  emitUser() {
    if(this.connectedUser == null && localStorage.getItem('id')) {
      this._user.getProfile(Number.parseInt(localStorage.getItem('id'))).subscribe((data : ConnectedUser) => {
        this.connectedUser = data
        this.connectedUserSubject.next(this.connectedUser)
      })
    }
    else this.connectedUserSubject.next(this.connectedUser)
  }
  

  emitIsConnected() {
    this.isConnectedSubject.next(this.isConnected)
  }



  constructor(
    private _client : HttpClient,
    private _route : Router,
    private _toast : NbToastrService,
    private _user : UserService
  ) { }

  

  login(email : string, password : string) {
    var user = new LoginInfo();
    user.email = email;
    user.password = password;
    this._client.post<ConnectedUser>(this.url+'user/login', user).subscribe({
      next : (data : ConnectedUser) => {
        this.connectedUser = data;
        localStorage.setItem('token', this.connectedUser.token)
        localStorage.setItem("role", data.role)
        localStorage.setItem('id', data.id.toString())
        this.emitUser()
        this._toast.info('You are successfully connected !!!')
        this._route.navigate(['/home']);
      },
      error : error =>  {console.log(error); console.log("an error or a bug occurs")}

    })

  }

  logout() {
    this.connectedUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.clear()
    this.emitUser()
    this._route.navigate(['/home'])
  }

}

  export class LoginInfo {
    email : string;
    password: string;
}

