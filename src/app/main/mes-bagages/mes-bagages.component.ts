import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mes-bagages',
  templateUrl: './mes-bagages.component.html',
  styleUrls: ['./mes-bagages.component.css']
})
export class MesBagagesComponent {

userId :any;
id :any
bagages: any=[];
passager :any=[];
user: any=[];
  constructor(private route: ActivatedRoute,private passagerService:PassagerService){}

  ngOnInit() : any {
    this.userId =localStorage.getItem('id');
    this.passagerService.getPassagerByUser(this.userId).subscribe({
      next:(response) =>{
        if(response.body.message =='success'){
          this.id = response.body.passager.id;
          this.passagerService.getBagPassager(this.id).subscribe({
            next :(data) =>{
              if(data.body.message =="success"){
                this.bagages = data.body.bagages;
                console.log(this.bagages);
              }
            }, error:(err) => {
              console.log(err);
            }
          })

          this.passagerService.getPassagerById(this.id).subscribe(
            {
              next:(response) => {
                if(response.body.message =="success"){
                  this.passager = response.body.passager;
                  this.user = response.body.user;
                  
                }
              }, error:(err) => {
              console.log(err);
            }
          }
          )
          
        }
      }
    }
    )
   
  }

  addPerte(passager:any,bagage:any){
    this.passagerService.addPerte(passager,bagage)
    .subscribe({
      next :(response) =>{
        if(response.message == 'success'){
          console.log(response.message);
          this.showAlertMessage("Success","Declaration of less saved as successfully","success")
        }
        else if(response.message == 'exist'){
          this.showAlertMessage("Error","Declaration is already saved ","warning");
        }
        else{
          this.showAlertMessage("Error","Error when saving declaration ","error");
        }

      }
    }
    )
  }

showAlertMessage( title:string, message:string, icon:any ){
  return Swal.fire({

    title: title,
    text: message,
    icon: icon,
    showCloseButton: true,
    //showCancelButton: true,
     confirmButtonColor: '#3085d6',
    //cancelButtonColor: '#d33',
    //cancelButtonText: 'Retour',

    // position: 'top-end',
    // timer: 3000

    // showCancelButton: showCancelButton,

  })
}
 
}
