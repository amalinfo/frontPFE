import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Champ} from "../../../models/Champ";
import {MatDialog} from "@angular/material/dialog";
import {ChampsService} from "../../../services/champs.service";
import {AddChampComponent} from "../../champs/add-champ/add-champ.component";
import {User} from "../../../models/User";
import {UpdateChampComponent} from "../../champs/update-champ/update-champ.component";
import {History} from "../../../models/History";
import {HistoryService} from "../../../services/history.service";
import {AddHistoryComponent} from "../add-history/add-history.component";

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent  implements OnInit{
  displayedColumns: string[] = ['id', 'capteur', 'user','nomcapteur','numero' ,'etat','date' , 'actions'];
  dataSource: MatTableDataSource<History> =new MatTableDataSource();
  value = '';

  @ViewChild(MatTable) table: MatTable<History> | undefined;

  constructor(public dialog: MatDialog , private historyService:HistoryService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    const dialogRef = this.dialog.open(AddHistoryComponent,
      {
        width:'50%',
        autoFocus: false,
        maxHeight: '90vh'
      }

    );

    dialogRef.afterClosed().subscribe(result => {
      if (result==true){
        this.getAll()
      }
    });
  }
  getAll(){
    this.historyService.getAll().subscribe({
      next:(res:History[])=> {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
      },
      error:(err:any)=>console.error(err)
    })
  }
  delete(id:any){
    this.historyService.delete(id).subscribe({
      next:(res:any)=> {
        console.log(res , "ok")
        this.getAll()
      },
      error:(err :any)=> {
        this.getAll()
        console.log(err, "error")
      }
    })
  }

}


