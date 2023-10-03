import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.css']
})
export class AddDepartComponent {
voiture :any = []
id :any;
depart :any =[];
  constructor(private route: ActivatedRoute, private router: Router, private voitureService :VoitureService,private departService:DepartService){}

  ngOnInit() : any {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
    }) 
    
  this.voitureService.getVoitureById(this.id).subscribe(
    {
      next : (data) =>{
        if(data.body.message == "success"){
          this.voiture =data.body.voiture;
        
        }
      }, error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Internal Server Error","danger")
  
      }
    }
  ) 
  } 
  
  addDepart(){
   this.departService.addDepart(
    this.id,
    this.depart.dateHeure,
    this.depart.destination
    ).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          window.location.reload();
          this.router.navigate(["/home/depart"]);
        }else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when saving informations ","warning")
        }

      },error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","warning")

      }
    })
      
  }
  showAlertMessage( title:string, message:string, icon:any){
    return Swal.fire({
  
      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      showCancelButton: true,
     // confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      //cancelButtonText: 'Retour',
  
      // position: 'top-end',
      // timer: 3000
  
      // showCancelButton: showCancelButton,
  
    }).then((result)=>{
        if(result.isConfirmed){
          if(icon == "warning"){
  
            this.router.navigate(["/home/addDepart"])
          }
  
        }
    })
  }


}
