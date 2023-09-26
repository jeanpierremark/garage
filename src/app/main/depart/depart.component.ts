import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent {
  departs : any = [];
   
  constructor(private router: Router, private departService : DepartService){}

  ngOnInit(): void {
    this.getAllDepart()
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
}
