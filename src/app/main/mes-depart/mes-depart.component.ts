import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DepartService } from 'src/app/service/depart.service';
import { PassagerService } from 'src/app/service/passager.service';

@Component({
  selector: 'app-mes-depart',
  templateUrl: './mes-depart.component.html',
  styleUrls: ['./mes-depart.component.css']
})
export class MesDepartComponent {
departs :any =[]
id :any;
constructor(private router: Router,private route :ActivatedRoute, private passagerService : PassagerService){}
dtOptions :DataTables.Settings = {}
dtTrigger :Subject<any> = new Subject<any>();
ngOnInit(){
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    autoWidth: true,
  };
  this.route.queryParamMap.subscribe(params => {
    this.id = params.get('id');})
  this.getMesDeparts()
}
getMesDeparts(){
  this.passagerService.getMesDeparts(this.id).
  subscribe({
    next:(response) =>{
      console.log(response.body.message);
        if(response.body.message == "success"){
          this.departs = response.body.departData
          this.dtTrigger.next(null);
        }
        console.log(this.departs);
        //this.router.navigate(["voiture"]);
    },error:(err) => {
      console.log(err);}
  })
}

}
