import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsHomeComponent } from './gyms-home/gyms-home.component';


const routes: Routes = [{
  path : '',
  component: GymsHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymsRoutingModule { }
