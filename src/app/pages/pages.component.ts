import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/home/clinic')
  }
  ngAfterViewInit(): void {
    this.router.navigateByUrl('/home/clinic')
    
  }

}
