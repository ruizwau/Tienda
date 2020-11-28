import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesinposnetComponent } from './components/clientesinposnet/clientesinposnet.component';


// import { BeforeLoginService } from './services/before-login.service';
// import { AfterLoginService } from './services/after-login.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [BeforeLoginService]
  },

  {
    path: 'home',
    component: HomeComponent
    
    // canActivate: [AfterLoginService]
  },
  
  {
  path: 'clientes',
  component: ClientesComponent
  
  // canActivate: [AfterLoginService]
},

{
  path: 'clientesinposnet',
  component: ClientesinposnetComponent
  
  // canActivate: [AfterLoginService]
}


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }