import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Capteur } from 'src/app/models/Capteur';
import { CapteurService } from 'src/app/services/capteur.service';

@Component({
  selector: 'app-listcapteurchamp',
  templateUrl: './listcapteurchamp.component.html',
  styleUrls: ['./listcapteurchamp.component.scss']
})
export class ListcapteurchampComponent implements OnInit {
  displayedColumns: string[] = ['id','nom', 'numero', 'modeleCapteur','etat','dateUtilisation', 'dateExpiration'];
  dataSource: MatTableDataSource<Capteur>=new MatTableDataSource();

  constructor(
   private capteurService:CapteurService,
   private router:Router,
   public dialogRef: MatDialogRef<ListcapteurchampComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any){

 }
  ngOnInit(): void {
    console.log("init");


    this.getChmapsCapteur();
  }
  getChmapsCapteur(){
    this.capteurService.getAllChampsCapteur(this.data.id).subscribe({
      next:(res:any)=>{this.dataSource = res
console.log(res);
      },
      error:(er:any) =>console.error(er)
    })
  }
  gotoCapteurList(){
    this.dialogRef.close();
    this.router.navigate(["/capteurs"])
  }


}
