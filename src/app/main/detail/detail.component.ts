import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DepartService } from 'src/app/service/depart.service';
import { PassagerService } from 'src/app/service/passager.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private userService :UserService ,private passagerService :PassagerService,private departService :DepartService) { }
pertes :any =[]
departs :any =[];
ngOnInit(){
  this.getPerte();
  this.getAllDepart();
}
  getPerte(){
    this.userService.getPerte()
    .subscribe({
      next: (response)=>{
        if(response.body.message =='success'){
          this.pertes = response.body.perteData;
         console.log(this.pertes)
        }
      }
    })
  }


  getAllDepart(){
    this.departService.getAllDepart().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.departs = response.body.departData
          }
          console.log(this.departs);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }

  updatePerte(id:any){
    this.passagerService.updatePerte(id).subscribe(
      {
        next : (response) =>{
          if(response.body.message == "success"){
            this.showAlertMessage("Success","Perte Traitée","success")
            window.location.reload()
          }
        },error : (error: HttpErrorResponse) => {
          if(error.error.message == "error"){
          this.showAlertMessage("Error"," Internal server error","error")
         
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
     // confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      //cancelButtonText: 'Retour',
  
      // position: 'top-end',
      // timer: 3000
  
      // showCancelButton: showCancelButton,
  
    }).then((result)=>{
        
    })
  }
  
}
