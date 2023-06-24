import {Component, Inject, OnInit} from '@angular/core';
import {Capteur} from "../../../models/Capteur";
import {Champ} from "../../../models/Champ";
import {CapteurService} from "../../../services/capteur.service";
import {ChampsService} from "../../../services/champs.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import Swal from 'sweetalert2';

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
    console.log(this.capteur.numero)
    if(this.capteur.nom===undefined||this.capteur.dateUtilisation===undefined||
      this.capteur.modeleCapteur===undefined||this.capteur.numero===undefined||
      this.capteur.dateExpiration===undefined||this.capteur.nom===""||this.capteur.dateUtilisation===""||
      this.capteur.modeleCapteur===""||this.capteur.numero===""||this.capteur.dateExpiration===""){

       Swal.fire("Remplir tout le formulaire !!!",undefined, "warning")
       return
    }

    Swal.fire("Modifier réussie !!!",undefined, "success")
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


