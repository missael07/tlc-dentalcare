import { Component, OnInit } from '@angular/core';
import { Languaje } from '../../helpers/languaje';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  languajeStorage: string | null = localStorage.getItem('lan')
  languaje = new Languaje(this.languajeStorage ?? '');
  constructor() { }

  ngOnInit(): void {
  }

}
