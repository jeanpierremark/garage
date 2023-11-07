import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-passager-depart',
  templateUrl: './add-passager-depart.component.html',
  styleUrls: ['./add-passager-depart.component.css']
})
export class AddPassagerDepartComponent {
passager :any =[];
id:any;
dateHeure:any;
depart:any;
chaine =new Date()

constructor(private router:Router,private route :ActivatedRoute,private departService :DepartService){}

ngOnInit(){
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
          
          
          console.log(this.depart);
         }
    }
  })       

}
    addPassager(){
      if(parseInt(this.depart.dateHeure.substring(5,7)) == this.chaine.getMonth()+1 
      && parseInt(this.depart.dateHeure.substring(8,10 ))==this.chaine.getDate()){
      if( parseInt(this.depart.dateHeure.substring(11,13 ))> this.chaine.getHours()
       
     ){
        this.departService.addPassager(
        this.id,
        this.depart.dateHeure,
        this.depart.destination,
        this.passager.carteId
        ).subscribe({
          next:(data)=>{
            if(data.message =="success"){
             
              this.showAlertMessage("Success","Informations saved succesfully ","success")
              this.router.navigate(["/home/depart"])
            }
          },error : (error: HttpErrorResponse) => {
            if(error.error.message == "not found"){
              this.showAlertMessage("Error"," This ID Card does not exist ","warning")
            
          }
          else if(error.error.message == "Error"){
            this.showAlertMessage("Error","Internal Server Error","warning")
          }
        
      }
    })
  }
  else if(
    parseInt(this.depart.dateHeure.substring(11,13 )) == this.chaine.getHours()
  && parseInt(this.depart.dateHeure.substring(14,16 )) > this.chaine.getMinutes()
  ){
    this.departService.addPassager(
      this.id,
      this.depart.dateHeure,
      this.depart.destination,
      this.passager.carteId
      ).subscribe({
        next:(data)=>{
          if(data.message =="success"){
           
            this.showAlertMessage("Success","Informations saved succesfully ","success")
            this.router.navigate(["/home/depart"])
          }
        },error : (error: HttpErrorResponse) => {
          if(error.error.message == "not found"){
            this.showAlertMessage("Error"," This ID Card does not exist ","warning")
          
        }
        else if(error.error.message == "Error"){
          this.showAlertMessage("Error","Internal Server Error","warning")
        }
      
    }
  })
  }
  else{
    this.showAlertMessage("Warning","This departure has already passed","warning")
  }
}
      else{
        this.showAlertMessage("Warning","This departure is not for today already passed","warning")
      }
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
