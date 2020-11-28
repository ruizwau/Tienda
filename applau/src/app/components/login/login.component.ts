import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../services/jarwis.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    username: null,
    password: null
  };


  constructor(private Jarwis: JarwisService,
    private Token: TokenService, private router: Router) { }
  


  onSubmit(){
this.Jarwis.login(this.form).subscribe(
        data=>this.handleResponse(data),
        error=>console.log(error)
      )
  }



  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/home');

  }

  ngOnInit(): void {
  }



}
