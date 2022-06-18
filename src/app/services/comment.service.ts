import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comment } from '../models/product.model';
import { ConnectedUser } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url : string = environment.baseAdres;

  constructor(
    private _client : HttpClient
  ) { }

  getByProduct(Id : number) : Observable<Comment[]> {
    return this._client.get<Comment[]>(this.url+"comment/"+Id)
  }

  addComment(c : Comment) {
    this._client.post(this.url+"comment", c).subscribe( {
      next : () =>{},
      error : (error) => console.log(error),
      complete : () => {}
    })
  }

  delete(id : number) : Observable<any> {
    return this._client.delete(this.url+"comment/"+id)
  }

}
