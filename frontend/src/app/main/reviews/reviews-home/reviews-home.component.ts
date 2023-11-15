import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reviews-home',
  templateUrl: './reviews-home.component.html',
  styleUrls: ['./reviews-home.component.css']
})
export class ReviewsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // starsArray: number[] = [];

  // onRateChange(value: number): void {
  //   this.starsArray = []; // Reiniciar el array de estrellas

  //   for (let i = 0; i < value; i++) {
  //     this.starsArray.push(i); // Agregar el número de estrellas según la puntuación
  //   }
  // }
}
