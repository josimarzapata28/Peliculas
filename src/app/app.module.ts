import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BuscarComponent } from './Components/buscar/buscar.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { PeliculasService } from './Services/peliculas.service';
import { FooterComponent } from './Components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    InformacionComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
