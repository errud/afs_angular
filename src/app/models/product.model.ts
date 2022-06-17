export class Product {
    id : number;
    title : string;
    description : string;
    imageUrl : string;
    origin : string;
    categoryid : number;
    featured : boolean;
    visible : boolean;
    supplier? : Supplier[];
}

export class ProductToApi {
    title : string;
    description : string;
    imageUrl : string;
    origin : string;
    category : number;
    featured : boolean;
    visible : boolean;
    supplier? : SupplyItem[];
 }

 export class SupplyItem {
    userid : number;
    prodid : number;
    quantity : number;
    totalprice : number
 }

 export class Supplier {
    userid : number;
    company : string;
    logo : string;
    sectorid : number;
    serviceid : number;
    membership : boolean;
    contact : string;
    phone : string;
    email : string;
    url : string;
    address : string;
    city : string;
    country : string;
    addinfo : string
 }

 export class Category {
    id : number;
    name: string;
    url : string;
    visible : string;
    deleted : boolean;
    editing : boolean;
    isnew : boolean
 }

 

 