import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: any = []
  passConf!:string
  
  
  passError = false;
  passConfError = false;
  emailError = false;


  constructor(private auth_service:UserService,private router:Router) { }


  emailVerif(email:string){

    if((email.endsWith("@gmail.com"))||(email.endsWith("@yahoo.com"))||(email.endsWith("@hotmail.com")) ||(email.endsWith("@hotmail.fr"))||(email.endsWith("@yahoo.fr"))){
      this.emailError = false
    }
    else{
      this.emailError = true
    }

  }

  passwordLengthVerif(pass1:string){
    if(pass1.length < 6){
      this.passError = true
     
  }

  else if(pass1.length >= 6){
      setTimeout(
        ()=>{
             this.passError = false
              
        },500
      )
  }

    if(this.passConf != undefined){

      if(this.passConf != pass1){
        
        this.passConfError =  true
      }
      else{
        this.passConfError =  false
      }

  }
  }

  passwordConfirmVerif(pass1:string, pass2:string){
    if(pass1 != pass2){
      this.passConfError=true
    }else{
      this.passConfError=false
    }

  }


  registerUser(){
    
    this.auth_service.creerUserPassager(
      this.user.prenom,
      this.user.nom,
      this.user.adresse,
      this.user.telephone,
      this.user.email,
      this.user.password,
      this.user.carteId
      )

    .subscribe({
      next:(data) => {
         if(data.body.message == "Success"){
         this.router.navigate(["/login"])
        
        }
        else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when saving information ","warning")
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
      // cancelButtonColor: '#d33',
      confirmButtonText: 'Se connecter',

      // position: 'top-end',
      // timer: 3000

      // showCancelButton: showCancelButton,

    }).then((result)=>{
        if(result.isConfirmed){
          if(icon == "warning"){

            this.router.navigate(["/login"])
          }

        }
    })
  }

}
