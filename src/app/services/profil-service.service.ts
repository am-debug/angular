import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfilServiceService {
libelle:string;
user : any ={}; 
  constructor(private http:HttpClient, private profils) { }
  public addProfil(user:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/admin/profils', user).pipe(tap(data =>{
      return data;
    }));
  }
  populateForm(profils){
    this.user.setValue(profils)
  }
}

