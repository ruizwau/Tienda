import { Component,OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Entity } from 'src/app/interface/interfaces';
import { CuentasCorrientes } from 'src/app/interface/interfaces';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
import { analyzeAndValidateNgModules } from '@angular/compiler';



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
  MovimientoForm: any;

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

      ngOnInit() {    }
     
      ngOnDestroy() {     }

      download(){
          var element=document.getElementById('tabletocanvas')
          html2canvas(element).then(
            (canvas)=>{

              var imgData=canvas.toDataURL('image/png')
              var doc= new jsPDF()
              var imgHeight= canvas.height * 208/ canvas.width
              doc.addImage(imgData,0,0,208,imgHeight)
              doc.save("image.pdf")
            })
      }


      resetForm() {
        this.MovimientoForm.reset();
      }
      resettablecanvas() {
        
        $("#tabletocanvas tr").remove(); 
      }



}
