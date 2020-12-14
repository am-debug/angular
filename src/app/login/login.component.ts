import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string;
password:string;
usernameIsvalide:boolean;
passwordIsvalide:boolean;
  constructor(private auth:AuthentificationService ,private router:Router) { }

  ngOnInit(): void {
    
  }
  onSubmit():void{
    console.log(this.username);
    this.auth.login(this.username,this.password)
    .subscribe(
      data => {
        console.log(localStorage.getItem('token_decoded'));
        var {roles} = JSON.parse(localStorage.getItem('token_decoded'));
        if (roles.includes("ROLE_Apprenant")) {
        this.auth.getUser().subscribe(
          data=>{console.log(data)
            var {archived} = JSON.parse(JSON.stringify(data));
            if (!archived ) {
              // redirection vers la formulaire d'inscriptio
              this.router.navigateByUrl('/register');
            }else{
              // redirection vers la page accueil apprenant
              this.router.navigateByUrl('/home');
            }
          },
          error=>{
            console.log(error);
          }
          
        );
      }else if(roles.includes("ROLE_Formateur")){
         // redirection vers la page accueil formateur
        this.router.navigateByUrl('/Formateur');
      }else if(roles.includes("ROLE_CM")){
         // redirection vers la page accueil CM
        this.router.navigateByUrl('/CM');
      }else if(roles.includes("ROLE_ADMIN")){
         // redirection vers la page accueil ADMIN
        this.router.navigateByUrl('/Admin');
      }
      },
      err => {
        console.log(err.error.message);
      }
    );
    

  }

}
