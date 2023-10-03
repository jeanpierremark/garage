import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bagage',
  templateUrl: './bagage.component.html',
  styleUrls: ['./bagage.component.css']
})
export class BagageComponent {
  bagages :any =[];
  id :any;
  idPassager :any;
  passager :any =[];
  constructor(private router:Router, private route : ActivatedRoute,private passagerService:PassagerService){}
  
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
  
        console.log('Valeur du paramètre "id" :', this.id);
      }),
    
    this.getBagage();
  
  
    this.passagerService.getPassagerById(this.id).subscribe(
      {
        next : (data) =>{
          if(data.body.message == "success"){
            this.passager =data.body.user;
            this.idPassager =data.body.passager.id;
          
          }
        }, error:(err) => {
          console.log(err);
          this.showAlertMessage("Error","Internal Server Error","danger")
    
        }
      }
    )
  }
  
  getBagage(){
    this.passagerService.getBagPassager(this.id).subscribe({
      next :(data) =>{
        if(data.body.message =="success"){
          this.bagages = data.body.bagages;
          console.log(this.bagages);
        }
      }, error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Internal Server Error","error")
  
      }
    })
  
  }
  
  
  deleteBagage(id :any){
    this.passagerService.deleteBagage(id).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          this.showAlertMessage("Success","Bagage deleted successfully","success")
        }
        else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when deleting Bagage ","warning")
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
            window.location.reload();
            this.router.navigate(["/home/passager/bagage?id="+this.idPassager])
          }
  
        }
    })
  }
}
