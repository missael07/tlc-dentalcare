import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
          {
            path: 'home', component:HomeComponent
          },
          {
            path: 'contact-us', component:ContactComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
