import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent {

  passagers : any = [];
   
  constructor(private router: Router, private passagerService : PassagerService){}

  ngOnInit(): void {
    this.getAllPassager()
}

    getAllPassager(){
    this.passagerService.getAllPassager().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.passagers = response.body.passagers
          }
          console.log(this.passagers);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }
}
