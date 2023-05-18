import {Role} from "./Role";

export class User {
  id!:number;
  email!:string;
  password!:string;
  appRoles!:Role[];
  nom!:String
  prenom!:String
  age!:number;
  cin!:String;
  numTel!:String;
  adress!:String;
  constructor()
  {
    this.appRoles  = [];
  }

}
