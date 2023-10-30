import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsGridHomeComponent } from './gyms-grid-home/gyms-grid-home.component';
import { GymsGridDetailComponent } from './gyms-grid-detail/gyms-grid-detail.component';


const routes: Routes = [{
  path: '',
  component: GymsGridHomeComponent
},
{
  path: ':gymid',
  component: GymsGridDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymsuserRoutingModule { }
