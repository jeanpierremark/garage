import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChauffeurService } from 'src/app/service/chauffeur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-chauffeur',
  templateUrl: './edit-chauffeur.component.html',
  styleUrls: ['./edit-chauffeur.component.css']
})
export class EditChauffeurComponent {
id : any ;
chauffeur : any = []
user :any =[]
prenom: any;
nom :any;







constructor(private router :Router, private route  : ActivatedRoute,private chauffeurService :ChauffeurService){}

ngOnInit() : any {
  this.route.queryParamMap.subscribe(params => {
  this.id = params.get('id');
    //console.log('Valeur du paramètre "id" :', this.id);
  }),
  //this.updateChauffeur()

  this.chauffeurService.getChauffeurById(this.id)
  .subscribe({
    next:(data) => {
       if(data.body.message == "success"){
        this.chauffeur = data.body.chauffeur;
        this.user = data.body.user;
        this.prenom = this.user.prenom;
        this.nom = this.user.nom;
        console.log(this.user);
        console.log(this.chauffeur)
      
      }
    }
})
}



updateChauffeur(){
  this.chauffeurService.updateChauffeur(
    this.id,
    this.user.prenom,
    this.user.nom,
    this.user.adresse,
    this.user.telephone,
    this.chauffeur.numPermis)
    .subscribe({
      next:(data) => {
         if(data.body.message == "success"){
         this.router.navigate(["/home/chauffeur"])
        
        }
        else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when updating informations ","warning")
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
    showCancelButton: true,
   // confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Retour',

    // position: 'top-end',
    // timer: 3000

    // showCancelButton: showCancelButton,

  }).then((result)=>{
      if(result.isConfirmed){
        if(icon == "warning"){

          this.router.navigate(["/home/editChauffeur"])
        }

      }
  })
}
}