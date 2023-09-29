import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http : HttpClient) { }


    getAllPassager(){
      return this.http.get<any>('http://localhost:3000/api/passager/all',{observe :"response"});
    }

    getPassagerById(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/getOne/'+id,{observe :"response"});
    }

    addBagage(id:number,libelle:string,typeBagage:string,quantite :string) {
      var formData: any = new FormData();
      formData.append("libelle", libelle);
      formData.append("typeBagage", typeBagage);
      formData.append("quantite", quantite);
      return this.http.post<any>('http://localhost:3000/api/passager/createBagage/'+id ,formData);
    }
    getBagPassager(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/passagerBagage/'+id);
    }
    updateBagage(id:number,libelle:string,typeBagage:string,quantite :string) {
      return this.http.put<any>('http://localhost:3000/api/passager/updateBagage/'+id ,{libelle,typeBagage,quantite});
    }
    updatePassager(id:number,prenom:string,nom:string,adresse:string,telephone:string,carteId :string) {
      return this.http.put<any>('http://localhost:3000/api/passager/updatePassager/'+id ,{prenom,nom,adresse,telephone,carteId},{observe :"response"});
    }
    deleteBagage(id : number){
      return this.http.delete<any>('http://localhost:3000/api/passager/deleteBagage/'+id);
    }
    deletePassager(id : any){
      return this.http.delete<any>('http://localhost:3000/api/passager/deletePassager/'+id,{observe:"response"});
    }
    
}
