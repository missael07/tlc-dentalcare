import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Languaje } from '../../helpers/languaje';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{
  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  coords = environment.coords;
  constructor() { }

  ngOnInit(): void {
  }

}
