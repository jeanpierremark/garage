import { HttpErrorResponse } from '@angular/common/http';
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
  static islogin: any
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
            next:(response)=>{  

            if(response.body.message =="connected"){
              if(response.body.user.role == "admin"){
                LoginComponent.admin = localStorage.getItem('prenom')+ " " +localStorage.getItem('nom');
                LoginComponent.islogin = response.body.islogin;
                console.log(LoginComponent.islogin)
                this.router.navigate(["/home/accueil"])
              }
              else if(response.body.user.role == "passager"){
                this.router.navigate(["/home/accueil"])
               
              } 
              else{
                this.router.navigate([""])
              }
            }           
        },error : (error: HttpErrorResponse) => {
          if(error.error.message == "not found"){
          this.showAlertMessage("Error","Wrong Email ","error")
          console.log(error.error.message)
          }
          else if(error.error.message == "incorrect"){
            this.showAlertMessage("Error","Your password is incorrect ","error")
            console.log(error.error.message)
            }
            else{
              this.showAlertMessage("Error","Internal Server Error ","error")
            }
        }
    })
  

}




showAlertMessage( title:string, message:string, icon:any ){
  return Swal.fire({

    title: title,
    text: message,
    icon: icon,
    showCloseButton: true,
    //showCancelButton: false,
    confirmButtonColor: '#3085d6',
 
    //confirmButtonText: '',

  }).then((result)=>{
      if(result.isConfirmed){

  }
})
}
}