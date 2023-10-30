import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartService {

  constructor( private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };
  addDepart(id :number ,dateHeure:string,destination :string) {
   
    return this.http.post<any>('http://localhost:3000/api/depart/create/'+id, {id,dateHeure,destination},{observe:"response",headers: this.httpOptions.headers});
  }
  addPassager(id :number ,dateHeure:string,destination :string,carteId:string) { 
    return this.http.post<any>('http://localhost:3000/api/depart/addPassager/'+id+'/'+dateHeure+'/'+destination+'/'+carteId,{observe:"response",headers: this.httpOptions.headers});
  }
  getAllDepart(){
    return this.http.get<any>('http://localhost:3000/api/depart/all',{observe : "response",headers: this.httpOptions.headers});
  }
  getPassager(id:string,dateHeure:string,destination:string){
    return this.http.get<any>('http://localhost:3000/api/depart/passager/'+id+'/'+dateHeure+'/'+destination,{observe : "response",headers: this.httpOptions.headers});
  }
  getDepartById(id: number,dateHeure:string){
        return this.http.get<any>('http://localhost:3000/api/depart/getOne/'+id+'/'+dateHeure,{observe : "response",headers: this.httpOptions.headers});
  }
  
  updateDepart(id :number ,dateHeure:string,destination :string,dateH:string) {
    return this.http.put<any>('http://localhost:3000/api/depart/update/'+id+'/'+dateH,{dateHeure,destination},{observe:"response",headers: this.httpOptions.headers});
  }
  deleteDepart(id : number,dateHeure :string){
    return this.http.delete<any>('http://localhost:3000/api/depart/delete/'+id+'/'+dateHeure,{observe:"response",headers: this.httpOptions.headers});
  }
  deletePassagerDepart(id : number,dateHeure :string,passagerId : number,destination :string){
    return this.http.delete<any>('http://localhost:3000/api/depart/deletePD/'+id+'/'+dateHeure+'/'+passagerId+'/'+destination ,{observe:"response",headers: this.httpOptions.headers});
  }
}
