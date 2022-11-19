import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { ClinicServicesComponent } from './pages/clinic-services/clinic-services.component';
import { ClinicComponent } from './pages/clinic/clinic.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { LocationComponent } from './pages/location/location.component';

const routes: Routes = [
  { 
    path: 'tlc-dental', 
    component: PagesComponent,
    children: [
      {
        path: 'services', component: ClinicServicesComponent
      },
      {
        path: 'clinic', component:ClinicComponent
      },
      {
        path: 'doctors', component:DoctorComponent
      },
      {
        path: 'location', component:LocationComponent
      },
      {
        path: 'contact', component:ContactComponent
      }
    ]
},
  { path: '', redirectTo: '/tlc-dental/services',pathMatch:'full' },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
