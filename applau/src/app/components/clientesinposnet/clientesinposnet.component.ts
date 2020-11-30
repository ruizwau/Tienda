import { Component,OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Clientes } from 'src/app/interface/interfaces';
import { EntityCliente } from 'src/app/interface/interfaces';
import { Posnet } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-clientesinposnet',
  templateUrl: './clientesinposnet.component.html',
  styleUrls: ['./clientesinposnet.component.css']
})
export class ClientesinposnetComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  cliente:any;
  arraycliente:EntityCliente[]=[];
  arrayposnet:Posnet[]=[];

 constructor(private http: HttpClient) { }

 ngOnInit(): void {

  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5
  };
  this.http.get<Clientes>('http://localhost:8000/api/clientesuno').subscribe(

    cliente=>{ 
      let respuesta=cliente; 
     this.arraycliente.push(...respuesta.Entities), 
    

    this.dtTrigger.next();
      }

  );
}


ngOnDestroy() {
}

}
