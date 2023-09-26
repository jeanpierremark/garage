import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = []

  passError = false;
  emailError = false;
 
  static admin: any;
  static passager: any;
  constructor(private login_service:LoginService,private router:Router) { }

 
  emailVerif(email:string){

    if((email.endsWith("@gmail.com"))||(email.endsWith("@yahoo.com"))||
       (email.endsWith("@hotmail.com"))||(email.endsWith("@hotmail.fr"))||
       (email.endsWith("@yahoo.fr"))){

      this.emailError = false
    }
    else{
      this.emailError = true
    }

  }

  passwordLengthVerif(pass:string){

    if(pass.length < 6){
      this.passError =  true

  }
  else if(pass.length >= 5){
      setTimeout(
        ()=>{
              this.passError =  false

        },100
      )
  }



  }

  loginUser(){
    
    this.login_service.connexion(this.user.email,this.user.pass)
          .subscribe({
            next:(response:any)=>{  

            if(response.body.message =="connected"){
            
              console.log(response.body);
              if(response.body.user.role == "admin"){
                LoginComponent.admin = localStorage.getItem('prenom')+ " " +localStorage.getItem('nom');
                this.router.navigate(["/home/accueil"])
              }
              else if(response.body.user.role == "passager"){
                LoginComponent.passager = response.body.user.prenom+ " " +response.body.user.nom;
                this.router.navigate([""])
              } 
              else{
                this.router.navigate([""])
              }
            }
            else{
              //console.log(response.error);
              this.showAlertMessage("Error",response.error.message,"error")
            }
            }
  })
  
}




showAlertMessage( title:string, message:string, icon:any ,showCancelButton = true){
  return Swal.fire({

    title: title,
    text: message,
    icon: icon,
    showCloseButton: true,
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Réessayer',

  }).then((result)=>{
      if(result.isConfirmed){

  }
})
}
}