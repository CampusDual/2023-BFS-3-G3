import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsHomeComponent } from './reviews-home/reviews-home.component';


const routes: Routes = [
  {
    path: "",
    component: ReviewsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
