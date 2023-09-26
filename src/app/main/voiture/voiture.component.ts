import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/service/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {

  voitures : any = [];
   
  constructor(private router: Router, private voitureService : VoitureService){}

  ngOnInit(): void {
    this.getAllVoiture()
}

    getAllVoiture(){
    this.voitureService.getAllVoiture().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.voitures = response.body.voitureData
          }
          console.log(this.voitures);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }
}
