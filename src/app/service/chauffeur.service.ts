import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http : HttpClient) { }

  

   httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

    getAllChauffeur(){
      
      return this.http.get<any>('http://localhost:3000/api/chauffeur/all',{observe : "response",headers: this.httpOptions.headers}); 
     
    }
    getChauffeurById(id:any){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/getOne/'+id,{observe : "response",headers: this.httpOptions.headers});
    }

    deleteChauffeur(id:any){
      return this.http.delete<any>('http://localhost:3000/api/chauffeur/delete/'+id,{observe : "response",headers: this.httpOptions.headers});
    }

    updateChauffeur(id:number,prenom: string,nom:string,adresse:string,telephone:number,numPermis :string){
      return this.http.put<any>('http://localhost:3000/api/chauffeur/update/'+id ,{prenom,nom,adresse,telephone,numPermis},{observe :'response',headers: this.httpOptions.headers});
    }
    getVoitures(id:number){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/voiture/'+id,{observe:"response",headers: this.httpOptions.headers});
    }

}
