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
    getBagageById(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/getOneBagage/'+id,{observe :"response"});
    }

    addBagage(id:number,libelle:string,quantite :string,date:string) {
     
      return this.http.post<any>('http://localhost:3000/api/passager/createBagage/'+id ,{id,libelle,quantite,date},{observe:"response"});
    }
    getBagPassager(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/passagerBagage/'+id,{observe:"response"});
    }
    updateBagage(id:number,libelle:string,quantite :string,date:Date) {
      return this.http.put<any>('http://localhost:3000/api/passager/updateBagage/'+id ,{libelle,quantite,date},{observe:"response"});
    }
    updatePassager(id:number,prenom:string,nom:string,adresse:string,telephone:string,carteId :string) {
      return this.http.put<any>('http://localhost:3000/api/passager/updatePassager/'+id ,{prenom,nom,adresse,telephone,carteId},{observe :"response"});
    }
    deleteBagage(id : number){
      return this.http.delete<any>('http://localhost:3000/api/passager/deleteBagage/'+id,{observe:"response"});
    }
    deletePassager(id : any){
      return this.http.delete<any>('http://localhost:3000/api/passager/deletePassager/'+id,{observe:"response"});
    }
    
}
