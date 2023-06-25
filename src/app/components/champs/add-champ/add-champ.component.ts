import {Component, Inject, OnInit} from '@angular/core';
import {ChampsService} from "../../../services/champs.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {Champ, ChampDto} from "../../../models/Champ";
import Swal from 'sweetalert2';

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
    console.log(this.champ);
    if(this.champ.nom===undefined||
      this.champ.userEmail===undefined||
      this.champ.adresse===undefined||
      this.champ.numero===undefined||
      this.champ.date_ajout===undefined){
       Swal.fire("Remplir tout le formulaire !!!",undefined, "warning")
       return
    }
    Swal.fire("Ajout réussie !!!",undefined, "success")
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


