import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lngLat: [number,number] = [-75.981029433568,45.28719674822362];
  constructor() { }

  ngOnInit(): void {
  }

}
