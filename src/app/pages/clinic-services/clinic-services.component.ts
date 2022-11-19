import { Component, OnInit } from '@angular/core';
import services from '../../helpers/clinic-services';
import { Languaje } from '../../helpers/languaje';


@Component({
  selector: 'app-clinic-services',
  templateUrl: './clinic-services.component.html',
  styleUrls: ['./clinic-services.component.css']
})
export class ClinicServicesComponent implements OnInit {

  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  clinicServices: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.clinicServices = services;
  }

}
