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

  doctors: any[] = [{
    name: 'DDS Yolanda Gutierrez',
    imgUrl: '../../../assets/Yolanda.jpg',
    specialization: this.languaje.generalDenstistry
  },{
    name: 'DDS Jari Franco',
    imgUrl: '../../../assets/Jari.jpg',
    specialization: this.languaje.Root_Canal_Specialist
  },{
    name: 'DDS Clarisa Luken',
    imgUrl: '../../../assets/Clarisa.jpg',
    specialization: this.languaje.Specialist
  },{
    name: 'DDS Alex Hernandez',
    imgUrl: '../../../assets/Alex.jpg',
    specialization: this.languaje.General_Implant_Specialist
  },{
    name: 'DDS Carlos Janay',
    imgUrl: '../../../assets/Carlos.jpg',
    specialization: this.languaje.generalDenstistry
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
