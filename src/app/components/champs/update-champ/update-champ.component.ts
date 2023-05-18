import {Component, Inject, OnInit} from '@angular/core';
import {Champ} from "../../../models/Champ";
import {CapteurService} from "../../../services/capteur.service";
import {ChampsService} from "../../../services/champs.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";

@Component({
  selector: 'app-update-champ',
  templateUrl: './update-champ.component.html',
  styleUrls: ['./update-champ.component.scss']
})
export class UpdateChampComponent  implements OnInit{

  champ : any ;
  users:any;
  constructor(     private champsService:ChampsService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private userService:UserService,
              public dialogRef: MatDialogRef<UpdateChampComponent>) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.champ = this.data;
    this.getAllUsers()
  }
  add() {
    
    this.champsService.updatechamp(this.champ).subscribe({
      next:(res:any)=>this.dialogRef.close(true),
      error:(res:any)=>this.dialogRef.close(false)
    })
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next:(res:User[])=>this.users  = res,
      error:(err :any)=>console.error(err)
    })
  }

}


