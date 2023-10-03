import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  creerUserPassager(prenom: string,nom: string,adresse:string,telephone: string,email:string,pass:string,carteId:string) {
   
    return this.http.post<any>('http://localhost:3000/api/user/createPassager',{prenom,nom,adresse,telephone,email,pass,carteId},{ observe: 'response' });
  }

  creerUserChauffeur(prenom: string,nom: string,adresse:string,telephone: string,email:string,pass:string,numPermis:number) {
    return this.http.post<any>('http://localhost:3000/api/user/createChauffeur',{prenom,nom,adresse,telephone,email,pass,numPermis},{ observe:'response' });
  }
  getAllUsers(){
    return this.http.get<any>('http://localhost:3000/api/user/all');
  }
  updateUser(id :number,prenom: string,nom: string,adresse:string,telephone: string,login:string,pass:string,role:string) {
    var formData: any = new FormData();
    formData.append("prenom", prenom);
    formData.append("nom", nom);
    formData.append("adresse", adresse);
    formData.append("telephone", telephone);
    formData.append("login", login);
    formData.append("pass", pass);
    formData.append("role", role);
    return this.http.put<any>('http://localhost:3000/api/user/update/'+id , formData,{ observe: 'response' });
  }
  deleteUser(id :number){
    return this.http.delete<any>('http://localhost:3000/api/user/delete/'+id,{ observe: 'response' });
  }
   
}
