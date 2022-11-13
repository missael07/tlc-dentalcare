import { Component, OnInit, AfterViewInit,ElementRef, ViewChild, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {
  coords = environment.coords;
  constructor() { }

  ngAfterViewInit(): void {
  }

}
