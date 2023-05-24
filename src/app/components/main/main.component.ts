import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MqttService } from 'ngx-mqtt';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  showFiller = false;
  isadmin:boolean=false;
  topicname="capteur/notification/test";
  nbNotification = 0;
  notificationList:any = [];
  msg: any;
  isConnected: boolean = false;
  constructor(
    private router:Router , private userservice:UserService,
    private mqttService: MqttService) {
          this.mqttService.connect()
          this.mqttService.observe(this.topicname).subscribe(res=>{
                console.log("this is the notification : " , res.payload.toString())
                this.nbNotification++;
                this.notificationList.push(res.payload.toString())
          })
    }







  ngOnInit(): void {
    this.isadmin=this.userservice.isAdmin()
  }

      logout(){
        localStorage.clear();
        this.router.navigateByUrl("/login")
      }




}
