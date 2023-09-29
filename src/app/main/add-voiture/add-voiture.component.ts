import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChauffeurService } from 'src/app/service/chauffeur.service';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent {
  voiture :any =[];
  id :any;
  chauffeur :any =[];
  constructor(private route: ActivatedRoute, private router: Router, private chauffeurService :ChauffeurService,private voitureService:VoitureService){}

  ngOnInit() : any {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    }) 
    
  this.chauffeurService.getChauffeurById(this.id).subscribe(
    {
      next : (data) =>{
        if(data.body.message == "success"){
          this.chauffeur =data.body.user;
        
        }
      }, error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Internal Server Error","danger")
  
      }
    }
  ) 
  } 
  
  addVoiture(){
   this.voitureService.addVoiture(
    this.id,
    this.voiture.type,
    this.voiture.matricule
    ).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          this.router.navigate(["/home/chauffeur"]);
        }else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when updating informations ","warning")
        }

      },error:(err) => {
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
