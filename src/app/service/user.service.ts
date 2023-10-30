import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  creerUserPassager(prenom: string,nom: string,adresse:string,telephone: string,email:string,pass:string,carteId:string) {
   
    return this.http.post<any>('http://localhost:3000/api/user/createPassager',{prenom,nom,adresse,telephone,email,pass,carteId},{ observe: 'response',headers: this.httpOptions.headers });
  }

  creerUserChauffeur(prenom: string,nom: string,adresse:string,telephone: string,email:string,pass:string,numPermis:number) {
    return this.http.post<any>('http://localhost:3000/api/user/createChauffeur',{prenom,nom,adresse,telephone,email,pass,numPermis},{ observe:'response',headers: this.httpOptions.headers });
  }
  
 
  deleteUser(id :number){
    return this.http.delete<any>('http://localhost:3000/api/user/delete/'+id,{ observe: 'response',headers: this.httpOptions.headers });
  }

  getPerte(){
    return this.http.get<any>('http://localhost:3000/api/user/allPerte',{ observe: 'response',headers: this.httpOptions.headers });
  }
   
  getVoitureType(){
    return this.http.get<any>('http://localhost:3000/api/user/voitureType',{ observe: 'response' ,headers: this.httpOptions.headers});
  }
}
