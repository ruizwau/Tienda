import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class JarwisService {




  constructor(private http: HttpClient) { }


  login(data){
    return this.http.post('http://localhost:8000/api/usuariolog',data);

  }

}
