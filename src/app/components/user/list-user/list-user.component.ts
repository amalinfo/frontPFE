import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddUserComponent} from "../add-user/add-user.component";
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {elementAt} from "rxjs";
import {UpdateUserComponent} from "../update-user/update-user.component";
import { ListChampsComponent } from '../../champs/list-champs/list-champs.component';
import { UserlistChampsComponent } from '../userlist-champs/userlist-champs.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nom', 'prenom','age', 'email','numTel', 'adress', 'actions'];
  dataSource: MatTableDataSource<User> =new MatTableDataSource();
  value = '';

  @ViewChild(MatTable) table: MatTable<User> | undefined;

  constructor(public dialog: MatDialog , private userService:UserService) {
  }
  ngOnInit(): void {
  this.getAllUsers();
  }
  add() {
    const dialogRef = this.dialog.open(AddUserComponent,
      {
        width:'50%',
        autoFocus: false,
        maxHeight: '90vh'
      }

    );

    dialogRef.afterClosed().subscribe(result => {
      if (result==true){
        this.getAllUsers()
      }
    });
  }
getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next:(res:User[])=> {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
      },
      error:(err)=>console.error(err)
    })
}

listChamp(user :any){

  const dialogRef = this.dialog.open(UserlistChampsComponent,
    {
      width:'50%',
      autoFocus: false,
      maxHeight: '90vh',
      data:user
    }

  );
}
deleteUser(id: any) {
  const confirmation = confirm("Voulez-vous vraiment supprimer cet utilisateur ?"); // Affiche une boîte de dialogue de confirmation

  if (confirmation) {
    this.userService.deleteuser(id).subscribe({
      next: (res: any) => {
        alert("Utilisateur supprimé avec succès"); // Affiche une alerte avec le message de succès
        this.getAllUsers();
      },
      error: (err) => {
        alert("Une erreur s'est produite lors de la suppression de l'utilisateur"); // Affiche une alerte avec le message d'erreur
        this.getAllUsers();
      }
    });
  }
}

  protected readonly elementAt = elementAt;

  updateUser(element:User) {
    const dialogRef = this.dialog.open(UpdateUserComponent,
      {
        width:'50%',
        autoFocus: false,
        maxHeight: '90vh',
        data:element
      }

    );

    dialogRef.afterClosed().subscribe(result => {
      if (result==true){
        this.getAllUsers()
      }
    });
  }

  findById() {
    if (this.value!= ''){
    this.userService.getUsebyId(this.value).subscribe({
      next:(res :any)=>{this.dataSource = new MatTableDataSource([res])
        console.log(res);
      },
      error:(err:any)=>console.error(err)
    })}else this.getAllUsers();
  }
}


