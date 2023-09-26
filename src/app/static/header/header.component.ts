import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user = LoginComponent.admin; 
  constructor(private login_service:LoginService,private router:Router) { }

  logOut(){
    this.login_service.logout();
    return  this.router.navigate(["login"])
  }

}
