import { Component, OnInit } from '@angular/core';
import services from '../../helpers/clinic-services';


@Component({
  selector: 'app-clinic-services',
  templateUrl: './clinic-services.component.html',
  styleUrls: ['./clinic-services.component.css']
})
export class ClinicServicesComponent implements OnInit {

  clinicServices: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.clinicServices = services;
  }

}
