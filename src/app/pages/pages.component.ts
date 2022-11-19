import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languaje } from '../helpers/languaje';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterViewInit {
  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  showMx: boolean = false;
  loading: boolean = true;
  constructor(private router: Router) { 
    this.showMx = this.languajeStorage === 'ES' ?? false;
    setTimeout(() => {
      this.loading = false;
      this.languaje.animateDelay = false;
    }, 1500);
  }

  ngOnInit(): void {
    this.router.navigateByUrl(localStorage.getItem('route') ?? '/tlc-dental/clinic')
  }
  ngAfterViewInit(): void {
    this.router.navigateByUrl(localStorage.getItem('route') ?? '/tlc-dental/clinic')
  }
  changeLanguaje(lan: string){
    localStorage.setItem('lan', lan)
    localStorage.setItem('route', this.router.url);
    window.location.reload();
  }
}
