import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BuscarComponent } from './Components/buscar/buscar.component';
import { InformacionComponent } from './Components/informacion/informacion.component';

const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: BuscarComponent},
  {path: 'information/:id', component: InformacionComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
   RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
