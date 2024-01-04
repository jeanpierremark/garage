import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ChauffeurService } from 'src/app/service/chauffeur.service';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voiture-chauffeur',
  templateUrl: './voiture-chauffeur.component.html',
  styleUrls: ['./voiture-chauffeur.component.css']
})
export class VoitureChauffeurComponent {
voitures :any =[];
id :any;
chauffeur :any =[];
constructor(private router:Router, private route : ActivatedRoute,private chauffeurService:ChauffeurService,private voitureService :VoitureService){}
dtOptions :DataTables.Settings = {}
dtTrigger :Subject<any> = new Subject<any>();
ngOnInit(){
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    autoWidth: true,
  };
  this.route.queryParamMap.subscribe(params => {
    this.id = params.get('id');

      console.log('Valeur du paramètre "id" :', this.id);
    }),
  
  this.getVoitures();


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

getVoitures(){
  this.chauffeurService.getVoitures(this.id).subscribe({
    next :(data) =>{
      if(data.body.message =="success"){
        this.voitures = data.body.voitures;
        this.dtTrigger.next(null);
        console.log(this.voitures);
      }
    }, error:(err) => {
      console.log(err);
      this.showAlertMessage("Error","Internal Server Error","error")

    }
  })

}


deleteVoiture(id :any){
  Swal.fire({
    title: 'Do you want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
  this.voitureService.deleteVoiture(id).subscribe({
    next:(data)=>{
      if(data.body.message =="success"){
        this.showAlertMessage("Success","Voiture deleted successfully","success")
      }
      else{
        console.log(data.body.message)
        this.showAlertMessage("Error","Error when deleting Voiture","warning")
      }

    },
    error:(err) => {
      console.log(err);
      this.showAlertMessage("Error","Internal Server Error","error")

    }
  })
}
});
  
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
          
          this.router.navigate(["/home/chauffeur/allVoitures?id="+this.id])
        }

      }
  })
}
}
