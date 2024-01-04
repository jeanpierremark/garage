import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
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
dtOptions :DataTables.Settings = {}
dtTrigger :Subject<any> = new Subject<any>();
ngOnInit(){
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    autoWidth: true,
  };
  this.getPerte();
  this.getAllDepart();
}
  getPerte(){
    this.userService.getPerte()
    .subscribe({
      next: (response)=>{
        if(response.body.message =='success'){
          console.log(response.body.perteData);
          this.pertes = response.body.perteData;
          
        
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
            this.departs = response.body.departData;
            this.dtTrigger.next(null);
          }
          console.log(this.departs);
          //this.router.navigate(["voiture"]); 
      },error:(err) => {
        console.log(err);}
    })
  }

  updatePerte(perteId:any,userId:any){
    
    this.passagerService.sendEmail(userId).subscribe(
      {
        next : (response) =>{
          console.log(response)
          if(response.message == "success"){
            console.log(response.message);
            this.passagerService.updatePerte(perteId).subscribe({
              next : (data) =>{
                    if(data.message == "success"){
                      this.showAlertMessage("Success","Perte Traitée","success")
                      window.location.reload()
                    }
              },error : (error: HttpErrorResponse) => {
                if(error.error.message == "error"){
                  console.log(error.error.message)
                  this.showAlertMessage("Error","Error when updating","error")
                  }
                }
              }
            )
          
          }
        },error : (error: HttpErrorResponse) => {
          if(error.error.message == "error"){
            console.log(error.error.message)
            this.showAlertMessage("Error","Error when sendding email","error")
            }
           else if(error.error.message == "not found"){
              console.log(error.error.message);
              this.showAlertMessage("Error"," This email does not exist","error")
              }
           else{
                this.showAlertMessage("Error","Internal server error","error")
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
      
  
    }).then((result)=>{
        
    })
  }
  
}
