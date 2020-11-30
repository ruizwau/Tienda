import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { DataTablesModule } from 'angular-datatables';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClientesinposnetComponent } from './components/clientesinposnet/clientesinposnet.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    ClientesinposnetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [JarwisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
