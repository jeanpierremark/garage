import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-depart',
  templateUrl: './edit-depart.component.html',
  styleUrls: ['./edit-depart.component.css']
})
export class EditDepartComponent {
  id : any ;
  dateHeure :any;
  dateH :any;
 d :any;
depart : any = []
 
  
  
  constructor(private router :Router, private route  : ActivatedRoute,private departService :DepartService){}
  
  ngOnInit() : any {
    this.route.queryParamMap.subscribe(params => {
    this.id = params.get('id');
      console.log('Valeur du paramètre "id" :', this.id);
      this.dateHeure = params.get('dateHeure');
      console.log('Valeur du paramètre "dateHeure" :', this.dateHeure);
      

    }),
   
  
    this.departService.getDepartById(this.id,this.dateHeure)
    .subscribe({
      next:(data) => {
         if(data.body.message == "success"){
          this.depart = data.body.depart;
          this.d=this.depart.destination;
          this.dateH=this.depart.dateHeure;
          
          console.log(this.dateH);
         }
    }
  })       
  }
  updateDepart(){
    this.departService.updateDepart(
      this.id,
      this.depart.dateHeure,
      this.depart.destination,
      this.dateH
     
     )
      .subscribe({
        next:(data) => {
           if(data.body.message == "success"){
          
            this.router.navigate(["/home/depart"])
          
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
 
  
  
  
 

