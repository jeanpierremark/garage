import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };


    getAllPassager(){
      return this.http.get<any>('http://localhost:3000/api/passager/all',{observe :"response",headers: this.httpOptions.headers});
    }

    getPassagerById(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/getOne/'+id,{observe :"response",headers: this.httpOptions.headers});
    }
    getPassagerByUser(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/getPass/'+id,{observe :"response",headers: this.httpOptions.headers});
    }
    getMesDeparts(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/mesDeparts/'+id,{observe :"response",headers: this.httpOptions.headers});
    }
    getBagageById(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/getOneBagage/'+id,{observe :"response",headers: this.httpOptions.headers});
    }

    addBagage(id:number,libelle:string,quantite :string,date :string) {
      return this.http.post<any>('http://localhost:3000/api/passager/createBagage/'+id ,{id,libelle,quantite,date},{observe:"response",headers: this.httpOptions.headers});
    }

    addPerte(passager:number,bagage :number) {
      return this.http.post<any>('http://localhost:3000/api/passager/createPerte/'+passager+'/'+bagage ,{observe:"response",headers: this.httpOptions.headers});
    }
    
    getBagPassager(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/passagerBagage/'+id,{observe:"response",headers: this.httpOptions.headers});
    }
    updateBagage(id:number,libelle:string,quantite :string,date:Date) {
      return this.http.put<any>('http://localhost:3000/api/passager/updateBagage/'+id ,{libelle,quantite,date},{observe:"response",headers: this.httpOptions.headers});
    }
    updatePassager(id:number,prenom:string,nom:string,adresse:string,telephone:string,carteId :string) {
      return this.http.put<any>('http://localhost:3000/api/passager/updatePassager/'+id ,{prenom,nom,adresse,telephone,carteId},{observe :"response",headers: this.httpOptions.headers});
    }
    updatePerte(id:number) {
      return this.http.put<any>('http://localhost:3000/api/passager/updatePerte/'+id ,{observe :"response",headers: this.httpOptions.headers});
    }
    deleteBagage(id : number){
      return this.http.delete<any>('http://localhost:3000/api/passager/deleteBagage/'+id,{observe:"response",headers: this.httpOptions.headers});
    }
    deletePassager(id : any){
      return this.http.delete<any>('http://localhost:3000/api/passager/deletePassager/'+id,{observe:"response",headers: this.httpOptions.headers});
    }
    
}
