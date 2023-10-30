import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

    addVoiture(id:number,type:string,matricule:string){
      return this.http.post<any>('http://localhost:3000/api/voiture/create/'+id ,{id,type,matricule},{observe:"response",headers: this.httpOptions.headers});
    }
    getAllVoiture(){
      return this.http.get<any>('http://localhost:3000/api/voiture/all',{observe : 'response',headers: this.httpOptions.headers});
    }
    getVoitureById(id :number){
      return this.http.get<any>('http://localhost:3000/api/voiture/getOne/'+id,{observe : 'response',headers: this.httpOptions.headers});
    }
    deleteVoiture(id : number){
      return this.http.delete<any>('http://localhost:3000/api/voiture/delete/'+id,{observe:"response",headers: this.httpOptions.headers});
    }
    updateVoiture(id:number,type:string,matricule:string){
      
      return this.http.put<any>('http://localhost:3000/api/voiture/update/'+id ,{matricule,type},{observe:"response",headers: this.httpOptions.headers});
    }
   
}
