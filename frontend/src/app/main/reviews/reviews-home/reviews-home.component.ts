import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-reviews-home',
  templateUrl: './reviews-home.component.html',
  styleUrls: ['./reviews-home.component.css']
})
export class ReviewsHomeComponent implements OnInit {

  private actRoute: ActivatedRoute;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.actRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
  }

  @ViewChild('inputrate', {static: true}) inputrate: OTextInputComponent;

  currentRate = 0; // Valoración actual del usuario
  stars = [1, 2, 3, 4, 5]; // Array de estrellas
  public rate:any;
 
  rates(value: any): void {
    this.currentRate = value;
      this.inputrate.setValue(value);
      console.log(this.currentRate);
  }

  insertRedirect(event:any) {
    this.router.navigate(['../../../home'], { relativeTo: this.actRoute }); //ESTO NO VA, pero sino se redirige a una ventana de administrador:(
  }
}