import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
const jwt = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private decodedToken;

  constructor(private http:HttpClient) { }
  public login(username:string, password:string): Observable<any>{
    return this.http.post('https://127.0.0.1:8000/api/login', {username, password}).pipe(tap(token =>{
    localStorage.clear();  
    return this.saveToken(token.token);
    }));
  }
  private saveToken(token: any): any{
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('token_decoded', JSON.stringify(this.decodedToken));
    return token;
  }
  
  public getUser(): Observable<any> {           
    return this.http.get('https://127.0.0.1:8000/api/apprenant').pipe(tap(data =>{
    return data;
}));
}
public updateApprenant(user:any): Observable<any>{
  return this.http.post('https://127.0.0.1:8000/api/admin/user', user).pipe(tap(data =>{
    return data;
  }));
}

}
