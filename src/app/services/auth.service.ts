import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationRequest} from "../models/AuthenticationRequest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private baseUrl:string='http://localhost:8081/api/auth';

  authenticate(authenticationRequest?:AuthenticationRequest):Observable<any> {

    const url = this.baseUrl+`/login`;

    return this.httpClient.post(url, authenticationRequest);

  }
  forgetpassword(email:String){
    const url = this.baseUrl+`/password`;
    const body ={

      "email":email
    }
    return this.httpClient.post(url, body)

  }


}
