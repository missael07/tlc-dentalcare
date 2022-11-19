import { Component, OnInit } from '@angular/core';
import { Languaje } from 'src/app/helpers/languaje';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  showMx: boolean = false;
  expanded = false;
  constructor() {
    this.showMx = this.languajeStorage === 'ES' ?? false;
    if(window.screen.width <= 767){
      this.expanded = true;
    }
  }


  ngOnInit(): void {
  }

  setRoute(route: string){
    localStorage.setItem('route', route);
    this.languaje.animateDelay = false;
  }



}
