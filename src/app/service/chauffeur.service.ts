import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  constructor(private http : HttpClient) { }

    getAllChauffeur(){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/all');
    }

    deleteChauffeur(id:any){
      return this.http.delete<any>('http://localhost:3000/api/chauffeur/delete/'+id);
    }
    updateChauffeur(id:number,numPermis :number){
      return this.http.put<any>('http://localhost:3000/api/chauffeur/upadate/'+id ,{numPermis});
    }
    getVoitures(id:number){
      return this.http.get<any>('http://localhost:3000/api/chauffeur/voiture'+id);
    }

}
