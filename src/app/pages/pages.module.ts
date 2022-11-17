import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MapsComponent } from './maps/maps.component';
import { ClinicServicesComponent } from './clinic-services/clinic-services.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LocationComponent } from './location/location.component';
import { ClinicComponent } from './clinic/clinic.component';
import { DoctorComponent } from './doctor/doctor.component';



@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    ContactComponent,
    MapsComponent,
    ClinicServicesComponent,
    ComingSoonComponent,
    LocationComponent,
    ClinicComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
     SharedModule,
     RouterModule
  ],
  exports: [ PagesComponent]
})
export class PagesModule { }
