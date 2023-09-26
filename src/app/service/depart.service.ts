import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartService {

  constructor( private http : HttpClient) { }

  addDepart(id :number ,dateHeure:string,destination :string) {
    var formData = new FormData();
    formData.append('dateHeure',dateHeure);
    formData.append('destination',destination);
    return this.http.post<any>('http://localhost:3000/api/depart/create', formData);
  }
  getAllDepart(){
    return this.http.get<any>('http://localhost:3000/api/depart/all',{observe : "response"});
  }
  getAllDepartVoiture(id : number){
    return this.http.get<any>('http://localhost:3000/api/depart/allDepartVoiture/'+id);
  }
  updateDepart(id :number ,dateHeure:string,destination :string) {
    var formData = new FormData();
    formData.append('dateHeure',dateHeure);
    formData.append('destination',destination);
    return this.http.put<any>('http://localhost:3000/api/depart/update/'+id, formData);
  }
  deleteDepart(id : number){
    return this.http.delete<any>('http://localhost:3000/api/depart/delete/'+id);
  }
}
