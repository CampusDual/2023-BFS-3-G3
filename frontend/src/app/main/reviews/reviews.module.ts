import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ReviewsHomeComponent } from './reviews-home/reviews-home.component';


@NgModule({
  declarations: [ReviewsHomeComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    OntimizeWebModule
  ]
})
export class ReviewsModule { }
