import { Component, OnInit, AfterViewInit,ElementRef, ViewChild, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {

  @Input() lngLat: [number,number] = [0,0];
  @ViewChild('mapa') divMapa!: ElementRef;
  coords = environment.coords;
  constructor() { }

  ngAfterViewInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
    const map = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat,
      zoom: 15,
      interactive: false
    })
    new mapboxgl.Marker().setLngLat(this.lngLat).addTo(map);
  }

}
