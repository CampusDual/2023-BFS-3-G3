import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GymsHomeComponent } from "./gyms-home/gyms-home.component";
import { GymsDetailComponent } from "./gyms-detail/gyms-detail.component";

const routes: Routes = [
  {
    path: "",
    component: GymsHomeComponent,
  },
  {
    path: ":gymid",
    component: GymsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymsRoutingModule {}
