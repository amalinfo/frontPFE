import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  user : User = new User();
constructor(private userService : UserService ,
            public dialogRef: MatDialogRef<AddUserComponent>) {
}
  addUser() {
    console.log(this.user)
    if(
      this.user.nom===undefined||
      this.user.prenom===undefined||
      this.user.age===undefined||
      this.user.email===undefined||
      this.user.numTel===undefined||
      this.user.password === undefined||
      this.user.adress === undefined){
       Swal.fire("Remplir tout le formulaire !!!",undefined, "warning")
       return
    }
    Swal.fire("Ajout réussie !!!",undefined, "success")
    this.userService.addUser(this.user).subscribe({
      next:(res:any)=>this.dialogRef.close(true),
      error:(res:any)=>this.dialogRef.close(false)
    })
    
  }
  }

