import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Capteur} from "../../../models/Capteur";
import {CapteurService} from "../../../services/capteur.service";
import {Champ} from "../../../models/Champ";
import {ChampsService} from "../../../services/champs.service";

@Component({
  selector: 'app-add-capteur',
  templateUrl: './add-capteur.component.html',
  styleUrls: ['./add-capteur.component.scss']
})
export class AddCapteurComponent  implements OnInit{

  capteur : Capteur = new Capteur();
   champs:Champ[] = []
  constructor(private capteurService:CapteurService ,
              private champsService:ChampsService,
              public dialogRef: MatDialogRef<AddCapteurComponent>) {
  }

  ngOnInit(): void {
    this.getAllChamps();
  }
  add() {
     this.capteur.etat=true
    this.capteurService.addcapteur(this.capteur).subscribe({
      next:(res:any)=>this.dialogRef.close(true),
      error:(res:any)=>this.dialogRef.close(false)
    })
  }
  getAllChamps(){
    this.champsService.getAllChamp().subscribe({
      next:(res:Champ[])=>this.champs = res,
      error:err => console.error(err)
    })
  }

}


