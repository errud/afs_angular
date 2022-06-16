export interface ConnectedUser {
    id : number;
    email: string;  
    firstName : string;
    lastName : string;
    nickName : string;
    role : string;
    isActive : boolean;
    created : Date;
    token : string;    
}

export interface UserRegister {
    email: string;  
    firstName : string;
    lastName : string;
    nickName : string;
    favoritept : number;
}