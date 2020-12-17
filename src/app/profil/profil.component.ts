import { AfterViewInit,Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AjoutprofilComponent } from '../ajoutprofil/ajoutprofil.component';
import { EditprofilComponent } from '../editprofil/editprofil.component';
import { identifierModuleUrl } from '@angular/compiler';

import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profils: any
  public displayedColumns = ['libelle', 'details','update', 'delete'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  public doFilter = (value: string) => {
    this.profils.filter = value.trim().toLocaleLowerCase();
  }
  
 
  constructor(private http:HttpClient,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/admin/profils',{headers:{'Accept':'application/json'}})
      .subscribe(
        Response=>{
            this.profils=Response;
            console.log(Response);
            
        }
      )
}
OpeneDialog() {
  this.dialog.open(AjoutprofilComponent, {
   
    data: {
     
    }
  });
}
OpenDialog(profil) {
  this.dialog
 
  this.dialog.open(EditprofilComponent, {
   
    data: {
     
    }
  });
  
 
}
find():void{

}

public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }
  
  ngAfterViewInit(): void {
    this.profils.paginator = this.paginator;
    this.profils.sort = this.sort;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.profils.filter = filterValue.trim().toLowerCase();

    if (this.profils.paginator) {
      this.profils.paginator.firstPage();
    }
  }
}





