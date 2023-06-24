import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { AddCapteurComponent } from './components/capteur/add-capteur/add-capteur.component';
import { UpdateCapteurComponent } from './components/capteur/update-capteur/update-capteur.component';
import { ListCapteurComponent } from './components/capteur/list-capteur/list-capteur.component';
import { AddChampComponent } from './components/champs/add-champ/add-champ.component';
import { ListChampsComponent } from './components/champs/list-champs/list-champs.component';
import { UpdateChampComponent } from './components/champs/update-champ/update-champ.component';
 import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import { HistoryListComponent } from './components/history/history-list/history-list.component';
import { AddHistoryComponent } from './components/history/add-history/add-history.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";
import{MatDatepickerModule}from'@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UserlistChampsComponent } from './components/user/userlist-champs/userlist-champs.component';
import { ListcapteurchampComponent } from './components/champs/listcapteurchamp/listcapteurchamp.component';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';



export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'broker.emqx.io',
  port: 8083,
  path:"/mqtt",
  protocol:"ws",
   resubscribe:true,
   
 }

@NgModule({
  declarations: [
    AppComponent,
     MainComponent,
    LoginComponent,
    HomeComponent,
    ListUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddCapteurComponent,
    UpdateCapteurComponent,
    ListCapteurComponent,
    AddChampComponent,
    ListChampsComponent,
    UpdateChampComponent,
    HistoryListComponent,
    AddHistoryComponent,
    UserlistChampsComponent,
    ListcapteurchampComponent,
    ForgetpasswordComponent,
    ChangePasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)

  ],

  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
