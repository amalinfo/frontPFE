import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {Capteur} from "../../../models/Capteur";
import {MatDialog} from "@angular/material/dialog";
import {CapteurService} from "../../../services/capteur.service";
import {AddCapteurComponent} from "../../capteur/add-capteur/add-capteur.component";
import {User} from "../../../models/User";
import {UpdateCapteurComponent} from "../../capteur/update-capteur/update-capteur.component";
import {Champ} from "../../../models/Champ";
import {ChampsService} from "../../../services/champs.service";
import {AddChampComponent} from "../add-champ/add-champ.component";
import {UpdateChampComponent} from "../update-champ/update-champ.component";

import { ListcapteurchampComponent } from '../listcapteurchamp/listcapteurchamp.component';

@Component({
  selector: 'app-list-champs',
  templateUrl: './list-champs.component.html',
  styleUrls: ['./list-champs.component.scss']
})
export class ListChampsComponent implements OnInit{
  displayedColumns: string[] = ['id', 'numero', 'nom', 'adress','dateAjout','actions'];
  dataSource: MatTableDataSource<Champ> =new MatTableDataSource();
  value = '';

@ViewChild(MatTable) table: MatTable<Champ> | undefined;

  constructor(public dialog: MatDialog , private champService:ChampsService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    const dialogRef = this.dialog.open(AddChampComponent,
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
  listCapteur(champ :any){
    const dialogRef = this.dialog.open(ListcapteurchampComponent,
      {
        width:'50%',
        autoFocus: false,
        maxHeight: '90vh',
        data:champ
      }
    );
  }
  getAll(){
    this.champService.getAllChamp().subscribe({
      next:(res:Champ[])=> {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
      },
      error:(err)=>console.error(err)
    })
  }
  delete(id: any) {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      this.champService.deletechamp(id).subscribe({
        next: (res: any) => {
          console.log(res, "ok");
          this.getAll();
        },
        error: (err) => {
          this.getAll();
          console.log(err, "error");
        }
      });
    }
  }
  update(element:User) {
    const dialogRef = this.dialog.open(UpdateChampComponent,
      {
        width:'50%',
        autoFocus: false,
        maxHeight: '90vh',
        data:element
      }

    );

    dialogRef.afterClosed().subscribe(result => {
      if (result==true){
        this.getAll()
      }
    });
  }
}


