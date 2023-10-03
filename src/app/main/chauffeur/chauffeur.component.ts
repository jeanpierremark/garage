import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChauffeurService } from 'src/app/service/chauffeur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent {

  chauffeurs : any = [];
   
  id : any;

constructor(private router : Router,private route :ActivatedRoute,private chauffeurService:ChauffeurService){}


ngOnInit() : any {
  
  this.route.queryParamMap.subscribe(params => {
  this.id = params.get('id');})
    this.getAllChauffeur();
}



    getAllChauffeur(){
    this.chauffeurService.getAllChauffeur().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.chauffeurs = response.body.chauffeurs
          }
          console.log(this.chauffeurs);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }

  deleteChauffeur(id :any){
    this.chauffeurService.deleteChauffeur(id).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          this.showAlertMessage("Success","Chauffeur deleted successfully","success")
        }
        else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when deleting ","warning")
        }
  
      },
      error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","danger")
  
      }
    })
    
  }
  showAlertMessage( title:string, message:string, icon:any ){
    return Swal.fire({
  
      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      //showCancelButton: true,
     // confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      //cancelButtonText: 'Retour',
  
      // position: 'top-end',
      // timer: 3000
  
      // showCancelButton: showCancelButton,
  
    }).then((result)=>{
        if(result.isConfirmed){
          if(icon == "success"){
            window.location.reload()
            this.router.navigate(["/home/chauffeur"])
          }
  
        }
    })
  }
  
}
