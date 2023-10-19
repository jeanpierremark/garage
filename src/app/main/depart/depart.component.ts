import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private departService : DepartService){}

  ngOnInit(): void {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true, // Change this to true if you want to show a loading indicator
      autoWidth: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        this.departService.getAllDepart().subscribe({
          next: (response) => {
           // console.log(response.message); // Utilisez response.message au lieu de response.body.message
            if (response.body.message == "success") { // Utilisez === pour comparer les chaînes de caractères
              this.departs = response.body.departData; // Utilisez response.departData au lieu de response.body.departData
            }
            console.log(this.departs);
            callback({ // Appel de la fonction de rappel avec les données
              recordsTotal: this.departs.length, // Nombre total de données
              recordsFiltered: this.departs.length, // Nombre de données après filtration (si vous filtrez)
              data: this.departs // Les données à afficher
            });
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
    };
    
  
}

    getAllDepart(){
   
  }

  deleteDepart(id :any,dateHeure :any){
    this.departService.deleteDepart(id,dateHeure).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
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
            window.location.reload();
            this.router.navigate(["/home/depart"])
          }
  
        }
    })
  }
}
