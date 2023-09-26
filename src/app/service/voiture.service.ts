import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http : HttpClient) { }


    addVoiture(id:number,type:string,matricule:string){
      var formData = new FormData();
      formData.append('type',type);
      formData.append('matricule',matricule);
      return this.http.post<any>('http://localhost:3000/api/voiture/create/'+id ,formData);
    }
    getAllVoiture(){
      return this.http.get<any>('http://localhost:3000/api/voiture/all',{observe : 'response'});
    }
    deleteVoiture(id : number){
      return this.http.delete<any>('http://localhost:3000/api/voiture/delete/'+id);
    }
    updateVoiture(id:number,type:string,matricule:string){
      var formData = new FormData();
      formData.append('type',type);
      formData.append('matricule',matricule);
      return this.http.put<any>('http://localhost:3000/api/voiture/update/'+id ,formData);
    }
    getPassagers(){
      return this.http.get<any>('http://localhost:3000/api/voiture/passagers');
    
    }
}
