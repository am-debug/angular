import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string;
  password:string;
  prenom:string;
  nom:string;
  user : any ={};

  constructor(private auth:AuthentificationService) { }

  ngOnInit(): void {}
  onSubmit():void{
    console.log(this.user);
    this.auth.updateApprenant(this.user).subscribe(
      data=>{

      },
      error=>{

      }
    );
  }

}
