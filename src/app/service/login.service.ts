import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  getDecodedAccessToken(token : string):any{
      try{
        return jwt_decode(token);
      }catch(e){
        return null;
      }
  }

  connexion( email : string , pass : string){
    return this.http.post<any>('http://localhost:3000/api/user/login',{email,pass},{ observe: 'response' })
    .pipe(
     map((userdata)=>{
      const token = userdata.body.token as string;
      const tokenInfo= this.getDecodedAccessToken(token);
      
      localStorage.setItem('token', token);
      console.log(token)
      localStorage.setItem('id', tokenInfo.userId);
      localStorage.setItem('email', userdata.body.user.email);
      localStorage.setItem('prenom', userdata.body.user.prenom);
      localStorage.setItem('nom',userdata.body.user.nom);
      localStorage.setItem('key', tokenInfo.key);
      localStorage.setItem('role', userdata.body.user.role);
      return userdata;
     })
    )
  }
  LoggedIn(){
    let user = localStorage.getItem('token');
    return !(user ===null)
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('key');
    localStorage.removeItem('email');
    localStorage.removeItem('prenom');
    localStorage.removeItem('nom');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
  }
}



