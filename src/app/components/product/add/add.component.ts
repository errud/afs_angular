import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ProductService } from 'src/app/services/product.service';
import { PersonService } from 'src/app/services/person.service';
import { ProductToApi, Supplier, Supply, SetItem, Supplied, Category, ProductType  } from 'src/app/models/product.model';
import { AddpersonComponent } from 'src/app/components/supplier/addperson/addperson.component'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  fg : FormGroup
  newFG : FormGroup
  personListe : Supplier[] = []
  categoryListe : Category[] = []
  prodtypeListe : ProductType[] = []

  constructor(
    private _pService : ProductService,
    private _builder : FormBuilder,
    private _ar : ActivatedRoute,
    private _dialog : NbDialogService,
    private _personS : PersonService
    ) { }

  ngOnInit(): void {
    this.personListe = this._ar.snapshot.data['personList']
    this.categoryListe = this._ar.snapshot.data['catList']
    this.prodtypeListe = this._ar.snapshot.data['prodtpList']
    this.initForm()
  }

  initForm() {
    console.log(this.personListe)
    console.log(this.categoryListe)
    this.fg = this._builder.group({
      title : [null, Validators.required],
      desc : [null, [Validators.required, Validators.maxLength(250)]],
      imageurl : [null, [Validators.required, Validators.maxLength(1500)]],
      origin : [null, Validators.required],
      category : [null, Validators.required],
      suppliers : this._builder.array([])
    })
  }

  submitForm() {
    let product : ProductToApi = new ProductToApi()
    product.title = this.fg.value['title']
    product.description = this.fg.value['desc']
    product.imageUrl = this.fg.value['imageurl']
    product.origin= this.fg.value['origin']
    product.categoryid = this.fg.value['category']
    product.suppliers = []
    let SupFromFg = this.getSuppliers().value
    
    for(let i = 0; i < this.getSuppliers().length; i++) {
      product.suppliers.push({prodid : SupFromFg[i]['id'], prodtype: 0,  userid : SupFromFg[i]['id'], quantity : 0, totalprice : 0})
    }

      this._pService.addProduct(product)

  }

  getSuppliers() : FormArray {
    return this.fg.get('suppliers') as FormArray
  }

  addSupplier() {
    let id = this.getSuppliers().length
 
    this.getSuppliers().push(this._builder.group({
      id : [],
      quantity : [],
      totalprice : [],
    }))
  }

  newPerson(){
    let box = this._dialog.open(AddpersonComponent, {
    })

    box.onClose.subscribe(() => {
      this._personS.getAll().subscribe((x : any) => this.personListe = x)
    })
  }
}
