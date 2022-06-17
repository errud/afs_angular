import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  listProduct : Product[]
  activeLink : boolean = false;


  constructor(
    private _service : ProductService
  ) { }

  ngOnInit(): void {
    this.activeLink = localStorage.getItem('token') != '' ? true : false
    this._service.getAll().subscribe((data : Product[]) => this.listProduct = data)
  }

}
