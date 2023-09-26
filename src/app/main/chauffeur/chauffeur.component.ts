import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChauffeurService } from 'src/app/service/chauffeur.service';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent {

  chauffeurs : any = [];
   
  constructor(private router: Router, private chauffeurService : ChauffeurService){}

  ngOnInit(): void {
    this.getAllChauffeur()
}

    getAllChauffeur(){
    this.chauffeurService.getAllChauffeur().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.chauffeurs = response.body.chauffeurs
          }
          console.log(this.chauffeurs);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }
}
