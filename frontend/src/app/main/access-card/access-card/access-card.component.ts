import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.css']
})
export class AccessCardComponent implements OnInit {

  public myAngularxQrCode: string = null;

  constructor() {
    this.myAngularxQrCode = 'hola';
  }

  ngOnInit() {
  }

}
