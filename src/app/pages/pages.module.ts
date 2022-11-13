import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    ContactComponent,
    MapsComponent
  ],
  imports: [
    CommonModule,
     SharedModule,
     RouterModule
  ],
  exports: [ PagesComponent]
})
export class PagesModule { }
