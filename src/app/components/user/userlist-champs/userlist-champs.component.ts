import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Champ } from 'src/app/models/Champ';
import { ChampsService } from 'src/app/services/champs.service';

@Component({
  selector: 'app-userlist-champs',
  templateUrl: './userlist-champs.component.html',
  styleUrls: ['./userlist-champs.component.scss']
})
export class UserlistChampsComponent  implements OnInit{
 
  displayedColumns: string[] = ['id', 'numero', 'nom', 'adress' ];
  dataSource: MatTableDataSource<Champ> =new MatTableDataSource();
   constructor(
    private champsService:ChampsService,
    private router:Router,
    public dialogRef: MatDialogRef<UserlistChampsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){

  }
  
  ngOnInit(): void {
    
this.getUserChmaps();
  }
  getUserChmaps(){
    this.champsService.getAllUserChamps(this.data.id).subscribe({
      next:(res:any)=>this.dataSource = res ,
      error:(er:any) =>console.error(er)
    })
  }

gotoChampsList(){
  this.dialogRef.close();
  this.router.navigate(["/champs"])
}

}
