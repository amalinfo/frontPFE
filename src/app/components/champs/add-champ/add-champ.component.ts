import {Component, Inject, OnInit} from '@angular/core';
import {ChampsService} from "../../../services/champs.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {Champ, ChampDto} from "../../../models/Champ";

@Component({
  selector: 'app-add-champ',
  templateUrl: './add-champ.component.html',
  styleUrls: ['./add-champ.component.scss']
})
export class AddChampComponent implements OnInit{

  champ : ChampDto = new ChampDto() ;
  users:any;
  constructor(     private champsService:ChampsService,
                    private userService:UserService,
                   public dialogRef: MatDialogRef<AddChampComponent>) {
  }

  ngOnInit(): void {
    this.getAllUsers()
  }
  add() {
    this.champsService.addchamp(this.champ).subscribe({
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


