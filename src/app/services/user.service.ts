import { Injectable } from '@angular/core';
import {AuthenticationRequest} from "../models/AuthenticationRequest";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../models/AuthenticationResponse";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router,
              private authenticationService:AuthService,
              private httpClient: HttpClient
  ) { }

  private baseUrl:string=   'http://localhost:8081/Utilisateurs';
  private authUrl:string='http://localhost:8081/api/auth';
  isUserLoggedIn():boolean
  {
    if(localStorage.getItem("accessToken"))
    {
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }

  login(authenticationRequest:AuthenticationRequest):Observable<AuthenticationResponse>
  {
    return this.authenticationService.authenticate(authenticationRequest);
  }
  isAdmin():boolean{
    let ad=localStorage.getItem("isadmin")
    if(ad!=null){

      console.log(ad)
      if(ad=="ADMIN"){
        return true
      }
      else
        return false
    }
    else
      return false
  }

  setAccessToken(authenticationResponse:any):void
  {
    localStorage.setItem("accessToken",authenticationResponse);
  }

  getAccessToken(){
    if(localStorage.getItem("accesToken" )==null){
      return null;
    }
    return JSON.parse(localStorage.getItem("accesToken")!);
  }

  getAllUsers():Observable<User[]>
  {
    const url = this.baseUrl+`/lister`;
    return  this.httpClient.get<User[]>(url )
  }

  addUser(user:any){
    return this.httpClient.post(this.authUrl+"/register",
      user);

  }
  deleteuser(id:any){
    return this.httpClient.delete(this.baseUrl+"/delete/"+id
    );

  }
  getUsebyId(id:any):Observable<User>{
    return this.httpClient.get<User>(this.baseUrl+"/findbyid/"+id)
  }
  updateUser(user:User){
    return this.httpClient.put(this.baseUrl+"/update/"+user.id,user)
  }

}
