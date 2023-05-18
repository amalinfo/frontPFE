import {Component, OnInit} from '@angular/core';
import {HistoryDto} from "../../../models/History";
import {CapteurService} from "../../../services/capteur.service";
import {HistoryService} from "../../../services/history.service";
import {Capteur} from "../../../models/Capteur";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.scss']
})
export class AddHistoryComponent  implements OnInit{

    history:HistoryDto = new HistoryDto();
    capteurs : Capteur[] = []
    constructor(private capteurService:CapteurService ,
                private historyService:HistoryService,
                public dialogRef: MatDialogRef<AddHistoryComponent>) {
    }
  ngOnInit(): void {
      this.getAllCapteurs()
  }

  getAllCapteurs(){
    this.capteurService.getAllCapteur().subscribe({
      next:(res)=>this.capteurs = res,
      error:err => console.error(err)
    })
  }

  add() {
    this.historyService.save(this.history).subscribe({
      next:(res:any)=>this.dialogRef.close(true),
      error:(res:any)=>this.dialogRef.close(false)
    })
  }
}
