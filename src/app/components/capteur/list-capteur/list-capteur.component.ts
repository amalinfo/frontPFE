import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {User} from "../../../models/User";
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../../../services/user.service";
import {AddUserComponent} from "../../user/add-user/add-user.component";
import {UpdateUserComponent} from "../../user/update-user/update-user.component";
import {Capteur} from "../../../models/Capteur";
import {CapteurService} from "../../../services/capteur.service";
import {AddCapteurComponent} from "../add-capteur/add-capteur.component";
import {UpdateCapteurComponent} from "../update-capteur/update-capteur.component";

@Component({
  selector: 'app-list-capteur',
  templateUrl: './list-capteur.component.html',
  styleUrls: ['./list-capteur.component.scss']
})
export class ListCapteurComponent implements OnInit{
  displayedColumns: string[] = ['id','nom', 'numero', 'modeleCapteur','etat','dateUtilisation',
  'dateExpiration','champ' , 'actions'];
  dataSource: MatTableDataSource<Capteur> =new MatTableDataSource();
  value = '';

  @ViewChild(MatTable) table: MatTable<Capteur> | undefined;

  constructor(public dialog: MatDialog , private capteurService:CapteurService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    const dialogRef = this.dialog.open(AddCapteurComponent,
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
    this.capteurService.getAllCapteur().subscribe({
      next:(res:Capteur[])=> {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
      },
      error:(err)=>console.error(err)
    })
  }
  delete(id: any) {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      this.capteurService.delete(id).subscribe({
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
    const dialogRef = this.dialog.open(UpdateCapteurComponent,
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


