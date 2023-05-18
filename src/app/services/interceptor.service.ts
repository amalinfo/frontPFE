import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>
  {

    if(localStorage.getItem("accessToken"))
    {
      var  authenticationResponse =
        localStorage.getItem('accessToken');
      console.log("from interceptor ",authenticationResponse)
      req  = req.clone(

        {
          headers: new HttpHeaders(

            {
              Authorization:'Bearer ' + authenticationResponse
            }
          )
        }
      )
    }
    console.log(req.headers)
    return next.handle(req);
  }
}
