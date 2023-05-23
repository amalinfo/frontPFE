import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthenticationRequest} from "../../models/AuthenticationRequest";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(
    private userService:UserService,
    private router:Router,
    
  ) {}
  ngOnInit(): void {
    localStorage.removeItem("accessToken");

    localStorage.removeItem("userEmail");
   
  }

  authenticationRequest:AuthenticationRequest = new AuthenticationRequest();
  errorMessage:string="";

  login()
  {
    console.log(this.authenticationRequest);
    this.userService.login(this.authenticationRequest).subscribe(data => {
      console.log("data " , data)
      this.userService.setAccessToken(data.token);
        localStorage.setItem("isadmin",data.admin)
        localStorage.setItem("userEmail",this.authenticationRequest.email)
        console.log("admin")
        this.router.navigate(['/']);
      //this.router.navigate(['']);
    } , error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
      console.log(error)


    });
  }
}
