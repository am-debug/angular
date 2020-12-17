import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProfilServiceService} from '../services/profil-service.service';
@Component({
  selector: 'app-ajoutprofil',
  templateUrl: './ajoutprofil.component.html',
  styleUrls: ['./ajoutprofil.component.css']
})
export class AjoutprofilComponent implements OnInit {
  libelle: string; 

  user : any ={};
  
  constructor(private profil:ProfilServiceService) { }
  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.user);
    this.profil.addProfil(this.user).subscribe(
      data=>{

      },
      error=>{

      }
    );
  }
  
}

