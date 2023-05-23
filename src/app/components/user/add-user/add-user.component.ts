import { Component } from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

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
    this.userService.addUser(this.user).subscribe({
      next:(res:any)=>this.dialogRef.close(true),
      error:(res:any)=>this.dialogRef.close(false)
    })
  }
}
