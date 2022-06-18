import { Injectable } from '@angular/core';
import { Product, ProductToApi, Supplied } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url : string = environment.baseAdres;

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

 
  getAll() : Observable<Product[]> {
    return this._client.get<Product[]>(this.url+"product")
  }

  getOne(id : number) : Observable<Product> {
    /*let myHeaders = new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ localStorage.getItem('token')
     })*/
     return this._client.get<Product>(this.url+"product/"+id)
 
   }

  addProduct(c : Product) {
    this._client.post(this.url+"product/", c).subscribe( {
      next : () =>{},
      error : (error) => console.log(error),
      complete : () => {}
    })
  }

}
