import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CMComponent } from './cm/cm.component';
import { FormateurComponent } from './formateur/formateur.component';
import { ProfilComponent } from './profil/profil.component';
import { AjoutprofilComponent } from './ajoutprofil/ajoutprofil.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'Admin', component:AdminComponent},
  {path:'Apprenant', component:ApprenantComponent},
  {path:'CM', component:CMComponent},
  {path:'Formateur', component:FormateurComponent},
  {path:'Profil', component:ProfilComponent},
  {path:'Ajoutprofil', component:AjoutprofilComponent},
  {path:'', component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
