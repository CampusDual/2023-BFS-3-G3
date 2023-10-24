import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsGridHomeComponent } from './gyms-grid-home/gyms-grid-home.component';


const routes: Routes = [{
  path: '',
  component: GymsGridHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymsuserRoutingModule { }
