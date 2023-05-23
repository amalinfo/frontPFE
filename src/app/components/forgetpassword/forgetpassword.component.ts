import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
email : any;
  constructor(private authService:AuthService , private  router :Router) {
  }
  forgetPwd() {
    this.authService.forgetpassword(this.email).subscribe({
      next:(res:any)=>this.router.navigateByUrl("/login"),
      error:(err:any)=>console.log(err)
    })
  }
}
