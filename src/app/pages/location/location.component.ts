import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy{

  coords = environment.coords;
  destroy = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
   console.log('destroy');
   
    this.destroy = true;
  }
}
