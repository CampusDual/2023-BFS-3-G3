import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymsmasterHomeComponent } from './gymsmaster-home/gymsmaster-home.component';
import { GymsmasterNewComponent } from './gymsmaster-new/gymsmaster-new.component';
import { GymsmasterDetailComponent } from './gymsmaster-detail/gymsmaster-detail.component';


const routes: Routes = [{
  path : '',
  component: GymsmasterHomeComponent
},
{
  path: "new",
  component: GymsmasterNewComponent,
},

{ path: ":gymid",   
  component: GymsmasterDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymsmasterRoutingModule { }
