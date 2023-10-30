import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.css']
})
export class AddDepartComponent {
voiture :any = []
id :any;
dateError = false;
depart :any =[];
chain="2023-10-04 12:30"
chaine =new Date();
constructor(private route: ActivatedRoute, private router: Router, private voitureService :VoitureService,private departService:DepartService){}

dateVerif(dateHeure :string){
  
  if(parseInt(dateHeure.substring(0,4)) == this.chaine.getFullYear() 
  && parseInt(dateHeure.substring(5,7)) >= this.chaine.getMonth()+1 
  && parseInt(dateHeure.substring(5,7 ))<=12
  && parseInt(dateHeure.substring(8,10 ))>=this.chaine.getDate()
  && parseInt(dateHeure.substring(8,10 ))<= 31
  && dateHeure.length ==16
  && parseInt(dateHeure.substring(11,13 ))<= 23
  && parseInt(dateHeure.substring(14,16 ))<= 59){
    this.dateError = true;
  }
  else {
    this.dateError=false;
  }
}





  ngOnInit() : any {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      console.log(parseInt(this.chain.substring(11,13)));
      console.log(this.chain.length);
    }) 
    
  this.voitureService.getVoitureById(this.id).subscribe(
    {
      next : (data) =>{
        if(data.body.message == "success"){
          this.voiture =data.body.voiture;
        
        }
      }, error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Internal Server Error","danger")
  
      }
    }
  ) 
  } 
  
  addDepart(){
    if(parseInt(this.depart.dateHeure.substring(0,4)) == this.chaine.getFullYear() 
    && parseInt(this.depart.dateHeure.substring(5,7)) >= this.chaine.getMonth()+1 
    && parseInt(this.depart.dateHeure.substring(5,7 ))<=12
    && parseInt(this.depart.dateHeure.substring(8,10 ))>=this.chaine.getDate()
    && parseInt(this.depart.dateHeure.substring(8,10 ))<= 31
    && this.depart.dateHeure.length ==16
    && parseInt(this.depart.dateHeure.substring(11,13 ))<= 23
    && parseInt(this.depart.dateHeure.substring(14,16 ))<= 59){
   this.departService.addDepart(
    this.id,
    this.depart.dateHeure,
    this.depart.destination
    ).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          this.router.navigate(["/home/depart"]);
        }else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when saving informations ","warning")
        }

      },error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Internal server error","warning")

      }
    })
  }
  else{
    this.router.navigate(["/home/addDepart?id=" + this.id])
    this.showAlertMessage("Error","veuillez écrir la date au format aaaa-mm-jj hh:mm et vérifier que la date est correcte ","warning")
  }
      
  }
  showAlertMessage( title:string, message:string, icon:any){
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
          if(icon == "warning"){
  
           
          }
  
        }
    })
  }


}
