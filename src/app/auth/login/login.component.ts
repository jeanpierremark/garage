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
    
    this.login_service.connexion(this.user.email,this.user.password)
    .subscribe({
      next:(data) => {
        if(data.body['message'] == "successfully"){

          localStorage.setItem('token','logged')
          this.router.navigate(["/home/index"])

      }
      else{

        this.showAlertMessage("Error","Login et/ou mot de passe incorrect","error")
      }

      },
      error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","warning")

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
