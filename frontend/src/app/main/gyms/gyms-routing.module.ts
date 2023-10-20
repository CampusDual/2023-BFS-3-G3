import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GymsHomeComponent } from "./gyms-home/gyms-home.component";
import { GymsDetailComponent } from "./gyms-detail/gyms-detail.component";
import { GymsNewComponent } from "./gyms-new/gyms-new.component";
import { GymsServiceComponent } from "./gyms-detail/gyms-service/gyms-service.component";

const routes: Routes = [
  {
    path: "",
    component: GymsHomeComponent,
  },

  {
    path: "new",
    component: GymsNewComponent,
  },
  {path: ":gymid/gymservices",
  component: GymsServiceComponent,
},

  { path: ":gymid",   
    component: GymsDetailComponent,  }   
  //   children: [       
  // {   path: "gymservices",      
  //  component: GymsServiceComponent  }
  //  ]},},
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymsRoutingModule {}
