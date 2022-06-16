import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnectedUser, UserRegister } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = environment.baseAdres;


  constructor(
    private _client : HttpClient,
    private _router : Router 
  ) { }

  register(newUser: UserRegister){
    this._client.post(this.url+"/user/register", newUser, {responseType:'text'}).subscribe({
      next : () => this._router.navigate(['/product']),
      error : (error) => console.log(error) 
    });
  }

  getProfile(id : number) : Observable<ConnectedUser> {
    return this._client.get<ConnectedUser>(this.url+"/user/"+id)
  }

  updateUser(u : ConnectedUser) {
    return this._client.put(this.url, u)
  }








}
