import { Injectable } from '@angular/core';
import { Supplier } from './../models/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { PersonService } from './person.service'


@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Supplier[]> {

  constructor(
    private _service : PersonService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Supplier[] | Observable<Supplier[]> | Promise<any> {
    return this._service.getAll()
  }
}
