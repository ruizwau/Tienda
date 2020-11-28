import { Component,OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Entity } from 'src/app/interface/interfaces';
import { CuentasCorrientes } from 'src/app/interface/interfaces';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data:any;
  array:Entity[]=[];




  public form = {
    ClientId: null,
    datefrom: null,
    dateTo:null
  }

  constructor(private http: HttpClient) { }

  onsubmit(){
     return this.http.post<CuentasCorrientes>('http://localhost:8000/api/movimiento', this.form).subscribe(
          data=>{ 
            let respuesta=data; 
            this.array.push(...respuesta.Entities),
       
          console.log('arrya',this.array)
          
            }
         )
       
      }

      ngOnInit() {


 

    }
     

 
      ngOnDestroy() {
      }




}
