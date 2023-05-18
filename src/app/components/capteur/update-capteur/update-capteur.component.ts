import {Component, Inject, OnInit} from '@angular/core';
import {Capteur} from "../../../models/Capteur";
import {Champ} from "../../../models/Champ";
import {CapteurService} from "../../../services/capteur.service";
import {ChampsService} from "../../../services/champs.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update-capteur',
  templateUrl: './update-capteur.component.html',
  styleUrls: ['./update-capteur.component.scss']
})
export class UpdateCapteurComponent implements OnInit{

  capteur : any ;
  champs:Champ[] = []
  constructor(private capteurService:CapteurService ,
              private champsService:ChampsService,
              @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<UpdateCapteurComponent>) {
  }

  ngOnInit(): void {
    console.log(this.data)
    this.capteur = this.data;
  
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


