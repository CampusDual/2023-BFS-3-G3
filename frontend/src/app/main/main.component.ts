import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  private actRoute: ActivatedRoute;
  router: Router;
  public serviceRoute:string;
 myAction(){

  this.router.navigate(['/main/payment/new'], { relativeTo: this.actRoute });
 }


}