import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passager-depart',
  templateUrl: './passager-depart.component.html',
  styleUrls: ['./passager-depart.component.css']
})
export class PassagerDepartComponent {
  passager :any =[];
  id:any;
  destination :any;
  dateHeure:any;
  passagers:any=[];
  depart :any = [];
  
  constructor(private router:Router,private route :ActivatedRoute,private departService :DepartService){}
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
        this.dateHeure = params.get('dateHeure');
        console.log('Valeur du paramètre "dateHeure" :', this.dateHeure);
        this.destination = params.get('destination');
        console.log('Valeur du paramètre "destination" :', this.destination);
        
  
      }),
  
    this.departService.getDepartById(this.id,this.dateHeure)
      .subscribe({
        next:(data) => {
           if(data.body.message == "success"){
            this.depart = data.body.depart;
            
            
            console.log(this.passagers);
           }
      }
    })    
    this.getPassager()   
  
  }
      getPassager(){
          this.departService.getPassager(
          this.id,
          this.dateHeure,
          this.destination,
          ).subscribe({
            next:(data)=>{
              if(data.body.message =="success"){
                this.passagers = data.body.passagers;
                this.dtTrigger.next(null);
              }      
            }
          })
      }

      deletePassagerDepart(id :any,dateHeure :any,passagerId :any,destination:any){
        this.departService.deletePassagerDepart(id,dateHeure,passagerId,destination).subscribe({
          next:(data)=>{
            if(data.body.message =="success"){
              this.showAlertMessage("Success","Passager Depart deleted successfully","success")
              window.location.reload()
            }
            else{
              console.log(data.body.message)
              this.showAlertMessage("Error","Error when deleting Passager Depart","error")
            }
      
          },
          error:(err) => {
            console.log(err);
            this.showAlertMessage("Error","Internal Server Error","error")
      
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
               
                this.router.navigate(["/home/depart/passager?id="+this.id+"&dateheure="+this.dateHeure+"&destination="+this.destination])
              }
      
            }
        })
      }
}
