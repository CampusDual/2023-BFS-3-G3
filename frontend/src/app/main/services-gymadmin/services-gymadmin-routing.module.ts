import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceGymadminHomeComponent } from './service-gymadmin-home/service-gymadmin-home.component';
import { ServiceGymadminNewComponent } from './service-gymadmin-new/service-gymadmin-new.component';
import { ServiceGymadminDetailComponent } from './service-gymadmin-detail/service-gymadmin-detail.component';


const routes: Routes = [{
  path: '',
  component: ServiceGymadminHomeComponent

},
{
  path: "new",
  component: ServiceGymadminNewComponent,
},
{ path: ":serviceid",   
    component: ServiceGymadminDetailComponent,  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesGymadminRoutingModule { }
