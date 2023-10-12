import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user :any = localStorage.getItem('prenom')+" "+localStorage.getItem('nom');
  stat:any = localStorage.getItem('role');
  role :any;
  pertes :any = [];
  notif :any;
ngOnInit():void {
  if (this.stat =="admin"){
    this.role="Gérant garage";
  }
  else{
    this.role="Passager";
  }

  this.getPerte()
}
  constructor(private userService :UserService , private login_service:LoginService,private router:Router) { }

  getPerte(){
    this.userService.getPerte()
    .subscribe({
      next: (response)=>{
        if(response.body.message =='success'){
          this.pertes = response.body.perteData;
          this.notif = response.body.elem;
        }
      }
    })
  }


  logOut(){
    this.login_service.logout();
    return  this.router.navigate(["login"])
  }

}
