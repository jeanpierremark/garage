import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartService {

  constructor( private http : HttpClient) { }

  addDepart(id :number ,dateHeure:string,destination :string) {
   
    return this.http.post<any>('http://localhost:3000/api/depart/create/'+id, {id,dateHeure,destination},{observe:"response"});
  }
  addPassager(id :number ,dateHeure:string,destination :string,carteId:string) { 
    return this.http.post<any>('http://localhost:3000/api/depart/addPassager/'+id+'/'+dateHeure+'/'+destination+'/'+carteId,{observe:"response"});
  }
  getAllDepart(){
    return this.http.get<any>('http://localhost:3000/api/depart/all',{observe : "response"});
  }
  getPassager(id:string,dateHeure:string,destination:string){
    return this.http.get<any>('http://localhost:3000/api/depart/passager/'+id+'/'+dateHeure+'/'+destination,{observe : "response"});
  }
  getDepartById(id: number,dateHeure:string){
        return this.http.get<any>('http://localhost:3000/api/depart/getOne/'+id+'/'+dateHeure,{observe : "response"});
  }
  getAllDepartVoiture(id : number){
    return this.http.get<any>('http://localhost:3000/api/depart/allDepartVoiture/'+id);
  }
  updateDepart(id :number ,dateHeure:string,destination :string,dateH:string) {
    return this.http.put<any>('http://localhost:3000/api/depart/update/'+id+'/'+dateH,{dateHeure,destination},{observe:"response"});
  }
  deleteDepart(id : number,dateHeure :string){
    return this.http.delete<any>('http://localhost:3000/api/depart/delete/'+id+'/'+dateHeure,{observe:"response"});
  }
  deletePassagerDepart(id : number,dateHeure :string,passagerId : number,destination :string){
    return this.http.delete<any>('http://localhost:3000/api/depart/deletePD/'+id+'/'+dateHeure+'/'+passagerId+'/'+destination ,{observe:"response"});
  }
}
