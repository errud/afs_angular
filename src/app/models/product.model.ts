import { ConnectedUser } from "./user.model";


export class Category {
   id : number;
   name: string;
   url : string;
   visible : string;
   deleted : boolean;
   editing : boolean;
   isnew : boolean
}

export class ProductType {
   id : number;
   name : string
}

export class SetItem {
   userid : number;
   prodid : number;
   prodtype : number;
   quantity : number;
   totalprice : number
}

export class ProductToApi {
    title : string;
    description : string;
    imageUrl : string;
    origin : string;
    categoryid : number;
    featured : boolean;
    visible : boolean;
    suppliers? : SetItem[];
 }


export class Sector {
   id : number;
   sectorname: string;
}

export class Service {
   id : number;
   servicename: string;
   price : number;
   period : string;
   note : string; 
}

 export class Supplier {
    userid : number;
    quantity : SetItem;
    totalprice : SetItem;
    prodtype : SetItem;
    company : string;
    logo : string;
    sectorid : Sector;
    serviceid : Service;
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

 export class Product {
   id : number;
   title : string;
   description : string;
   imageUrl : string;
   origin : string;
   category : Category;
   featured : boolean;
   visible : boolean;
   suppliers? : Supply[];
}


export class Supply {
   quantity : number;
   totalprice : number;
   prodtype : number;
   userid?: number;
}



 export class Comment {
   id : number;
   content : string;
   postDate : Date;
   userID : number;
   productID : number;
   userName? : string;
}

export class CSupplier {
   id : number;
   company : string;
   sector : Sector;
   service : Service;
   user : AppUser;
   contact : string;
   email : string;
   phone : string;
   city : string;
   county : string;
   note : string;
   CatProd? : Product[];
   PProdType? : ProductType[];
   SupplyIn? : Supplied[]
}
 
export class Supplied {
   quantity : number;
   price : number;
   productTitle : string;
   productID : number
}

 
export class Buyer {
   user : Comment;
   phone : string;
   city : string;
   country : string;
   company : string;
   url : string;
   sectorid : Sector;
   serviceid : Service;
   membership : boolean;
   contact : string;
}


export class AppUser {
   id : number;
   firstName : string;
   lastName : string;
   nickName : string;
   email : string;
   role : string;
}
