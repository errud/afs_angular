import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CSupplier, Supplier } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url : string = environment.baseAdres;
  constructor(
    private _client : HttpClient
  ) { }

  getOne(id : number) : Observable<CSupplier>
    {
      /*let myHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem('token')
      })*/
      return this._client.get<CSupplier>(this.url+"supplier/"+id)
    }

  getAll() : Observable<Supplier[]> {
    return this._client.get<Supplier[]>(this.url+"supplier/")
  }

  create(person : Supplier ) {
    return this._client.post(this.url+"person", person, {responseType : 'text'})
  }

  
  
}
