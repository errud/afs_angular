import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  adminMenu? : NbMenuItem[]
  constructor() { }

  ngOnInit(): void {
    this.adminMenu = [
      { link : '/addProduct', title : 'Add a Product' }
    ]
      
    }
  }


