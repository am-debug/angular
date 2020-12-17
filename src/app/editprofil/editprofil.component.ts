import { Component, OnInit } from '@angular/core';
import { ProfilServiceService } from '../services/profil-service.service';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {
  libelle: string; 

  user : any ={};
  constructor() { }

  ngOnInit(): void {}
  onSubmit(): void {

  }


}
