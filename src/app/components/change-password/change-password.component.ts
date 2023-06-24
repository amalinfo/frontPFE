import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  code?: string;
  newPassword?:string;


  constructor(private router: Router){

  }


  changePassword(){
    console.log(this.code, this.newPassword);
    if(this.code==='code'&&this.newPassword!==undefined&&this.newPassword!==''){
      Swal.fire('Votre mot de passe est réinitialisé avec succés',undefined,'success')
      
      this.router.navigateByUrl('/login')
    }else{
      Swal.fire("Erreur !!!",'Verifier votre code ou Saisir un mdp valide', "warning")

    }
  }
}
