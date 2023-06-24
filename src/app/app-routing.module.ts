import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MainComponent} from "./components/main/main.component";
import {HomeComponent} from "./components/home/home.component";
import {ListUserComponent} from "./components/user/list-user/list-user.component";
import {ListChampsComponent} from "./components/champs/list-champs/list-champs.component";
import {ListCapteurComponent} from "./components/capteur/list-capteur/list-capteur.component";
import {HistoryListComponent} from "./components/history/history-list/history-list.component";
import {GuardService} from "./services/guard.service";
import {ForgetpasswordComponent} from "./components/forgetpassword/forgetpassword.component";
import { ChangePasswordComponent } from './components/change-password/change-password.component';


const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"forgetPassword", component: ForgetpasswordComponent},
  {path:"changePassword" , component:ChangePasswordComponent},
  {path:"" , component:MainComponent,
    canActivate: [GuardService],
    children:[
      {path: "users" , component:ListUserComponent},
      {path:"" , component:HomeComponent},
      {path:"champs" , component:ListChampsComponent},
      {path:"capteurs" , component:ListCapteurComponent},
      {path:"history" , component:HistoryListComponent},
      
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
