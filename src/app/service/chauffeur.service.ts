import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http : HttpClient) { }

    getAllChauffeur(){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/all',{observe : "response"});
    }
    getChauffeurById(id:any){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/getOne/'+id,{observe : "response"});
    }

    deleteChauffeur(id:any){
      return this.http.delete<any>('http://localhost:3000/api/chauffeur/delete/'+id,{observe : "response"});
    }

    updateChauffeur(id:number,prenom: string,nom:string,adresse:string,telephone:number,numPermis :string){
      return this.http.put<any>('http://localhost:3000/api/chauffeur/update/'+id ,{prenom,nom,adresse,telephone,numPermis},{observe :'response'});
    }
    getVoitures(id:number){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/voiture/'+id,{observe:"response"});
    }

}
