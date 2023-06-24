import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2';

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
      next:(res:any)=>{
        this.router.navigateByUrl("/changePassword")
     
      },
      error:(err:any)=>{
        if(err.error===null){
          Swal.fire("Mail Invalid !",undefined, "warning")
        }
        else {
          this.router.navigateByUrl("/changePassword")
        }
      }
    })
  }
}
