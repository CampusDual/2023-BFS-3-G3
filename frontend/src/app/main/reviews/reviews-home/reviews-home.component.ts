import { Component, OnInit, ViewChild } from '@angular/core';
import { OTextInputComponent } from 'ontimize-web-ngx';


@Component({
  selector: 'app-reviews-home',
  templateUrl: './reviews-home.component.html',
  styleUrls: ['./reviews-home.component.css']
})
export class ReviewsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('inputrate', {static: true}) inputrate: OTextInputComponent;

  currentRate = 0; // Valoración actual del usuario
  stars = [1, 2, 3, 4, 5]; // Array de estrellas
  public rate:any;
 
  rates(value: any): void {
    this.currentRate = value;
    // this.rate = value;
    // const rateInput = document.getElementById('rateInput');
    //   rateInput.setAttribute('rate', this.rate);

      this.inputrate.setValue(value);
      console.log(this.currentRate);
  }
  // getRate() {

  // }

  // starsArray: number[] = [];

  // onRateChange(value: number): void {
  //   this.starsArray = []; // Reiniciar el array de estrellas

  //   for (let i = 0; i < value; i++) {
  //     this.starsArray.push(i); // Agregar el número de estrellas según la puntuación
  //   }
  // }
}
