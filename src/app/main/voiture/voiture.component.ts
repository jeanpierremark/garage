import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  id :any;
  voitures : any = [];
  dtOptions :DataTables.Settings = {}
  dtTrigger :Subject<any> = new Subject<any>();
  constructor(private router: Router,private route : ActivatedRoute, private voitureService : VoitureService){}
  
  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,
    };
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');})
    this.getAllVoiture()
}

    getAllVoiture(){
    this.voitureService.getAllVoiture().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.voitures = response.body.voitureData;
            this.dtTrigger.next(null);
          }
          console.log(this.voitures);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
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
              this.router.navigate(["/home/chauffeur/allVoiture"])
              this.showAlertMessage("Success","Voiture deleted successfully","success")
            }
            else{
              console.log(data.body.message)
              this.showAlertMessage("Error","Error when deleting Voiture","error")
            }
      
          },
          error:(err) => {
            console.log(err);
            this.showAlertMessage("Error","Internal Server Error","danger")
      
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
            
           
          }
  
        }
    })
  }
}
