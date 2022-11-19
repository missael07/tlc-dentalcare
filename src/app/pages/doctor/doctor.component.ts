import { Component, OnInit } from '@angular/core';
import { Languaje } from '../../helpers/languaje';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  animateDelay: boolean = this.languaje.animateDelay;
  constructor() { }

  ngOnInit(): void {
  }

}
