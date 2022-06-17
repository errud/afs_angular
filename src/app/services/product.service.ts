import { Injectable } from '@angular/core';
import { Product, ProductToApi, SupplyItem } from '../models/product.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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


}
