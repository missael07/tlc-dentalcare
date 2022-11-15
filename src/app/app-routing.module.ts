import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: PagesComponent,
    children: [
      {
        path: 'about-us', component:HomeComponent
      },
      {
        path: 'contact-us', component:ContactComponent
      }
    ]
},
  { path: '', component:NotpagefoundComponent },
  // { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
