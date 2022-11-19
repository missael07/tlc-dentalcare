import { Component, OnInit } from '@angular/core';
import { Languaje } from '../../helpers/languaje';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  constructor() { }

  ngOnInit(): void {
  }

}
