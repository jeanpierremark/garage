import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
user :any = localStorage.getItem('prenom')+" "+localStorage.getItem('nom');
status :any=localStorage.getItem('role');
bus:any=[];
car:any=[];
miniBus:any=[];
miniCar:any=[];
place:any=[];
place4:any=[];
v:any;
stat:any = localStorage.getItem('role');

constructor(private userService : UserService){}
ngOnInit(){
this.getVoitureType()
}
getVoitureType(){
  this.userService.getVoitureType().subscribe({
    next :(response) =>{
      if(response.body.message){
        this.bus=response.body.busData;
        this.car=response.body.carData;
        this.miniBus=response.body.minibusData;
        this.miniCar=response.body.minicarData;
        this.place = response.body.placeData;
        this.place4 = response.body.placeD;
        
        this.v=response.body.vData;
      }
    }
  })
}
 
}
