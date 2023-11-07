import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent {

  passagers : any = [];
  dtOptions :DataTables.Settings = {}
  dtTrigger :Subject<any> = new Subject<any>();
   
  constructor(private router: Router, private passagerService : PassagerService,private location :Location){}
 
  ngOnInit(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,
    };
    this.getAllPassager()
}

    getAllPassager(){
    this.passagerService.getAllPassager().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.passagers = response.body.passagers
            this.dtTrigger.next(null);
        
          }
          console.log(this.passagers);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }
  retour(){
    this.location.back();
  }

  deletePassager(id :any){
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
        this.passagerService.deletePassager(id).subscribe({
          next:(data)=>{
            if(data.body.message =="success"){
              this.showAlertMessage("Success","Passager deleted successfully","success")
            }
            else{
              console.log(data.body.message)
              this.showAlertMessage("Error","Error when deleting ","warning")
            }
      
          },
          error:(err) => {
            console.log(err);
            this.showAlertMessage("Error","Internal server error","danger")
      
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
      showCancelButton: true,
     // confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      //cancelButtonText: 'Retour',
  
      // position: 'top-end',
      // timer: 3000
  
      // showCancelButton: showCancelButton,
  
    }).then((result)=>{
        if(result.isConfirmed){
          if(icon == "success"){
  
            this.router.navigate(["/home/passager"])
          }
  
        }
    })
  }
}
