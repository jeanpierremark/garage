import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bagage',
  templateUrl: './add-bagage.component.html',
  styleUrls: ['./add-bagage.component.css']
})
export class AddBagageComponent {
bagage :any = []
id :any;
today :any;
dateT:any;
passager :any =[];
  constructor(private route: ActivatedRoute, private router: Router, private passagerService :PassagerService , private location:Location){}

  ngOnInit() : any {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.dateT = params.get('dateh')
    }) 
    
  this.passagerService.getPassagerById(this.id).subscribe(
    {
      next : (data) =>{
        if(data.body.message == "success"){
          this.passager =data.body.user;
          
        }
      }, error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Internal Server Error","danger")
  
      }
    }
  ) 
  } 
  
  addBagage(){
   this.passagerService.addBagage(
    this.id,
    this.bagage.libelle,
    this.bagage.quantite,
    this.dateT
    ).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          this.showAlertMessage("Success","Bagage added successfully","success")
         this.location.back();
        }else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when saving informations ","warning")
        }

      },error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","warning")

      }
    })
      
  }
  showAlertMessage( title:string, message:string, icon:any){
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
