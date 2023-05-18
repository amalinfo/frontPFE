import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{
  user : User = new User();
  constructor(private userService : UserService ,
              public dialogRef: MatDialogRef<UpdateUserComponent> ,
              @Inject(MAT_DIALOG_DATA) public data: any
              ) {
  }
  addUser() {
    this.userService.updateUser(this.user).subscribe({
      next:(res:any)=>this.dialogRef.close(true),
      error:(res:any)=>this.dialogRef.close(false)
    })
  }

  ngOnInit(): void {
    this.user = this.data
  }

}
