import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent {
  departs : any = [];
   dtOptions :DataTables.Settings = {}
   dtTrigger :Subject<any> = new Subject<any>();
  constructor(private router: Router, private departService : DepartService,private location :Location){}

  ngOnInit(): void {
    this.getAllDepart();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,
    };
    
  
}
retour(){
  this.location.back();
}

    getAllDepart(){
      this.departService.getAllDepart().subscribe({
        next: (response) => {
          this.departs = response.body.departData;
          this.dtTrigger.next(null);
        
          
        },
        error: (err) => {
          console.log(err);
        }

      });
   
  }

  deleteDepart(id :any,dateHeure :any){
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
        this.departService.deleteDepart(id,dateHeure).subscribe({
          next:(data)=>{
            if(data.body.message =="success"){
              this.router.navigate(["/home/depart"])
              this.showAlertMessage("Success","Depart deleted successfully","success")
            }
            else{
              console.log(data.body.message)
              this.showAlertMessage("Error","Error when deleting Depart","error")
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
