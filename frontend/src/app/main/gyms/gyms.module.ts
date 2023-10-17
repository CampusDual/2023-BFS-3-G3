import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GymsRoutingModule } from "./gyms-routing.module";
import { OntimizeWebModule } from "ontimize-web-ngx";
import { GymsHomeComponent } from "./gyms-home/gyms-home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { GymsDetailComponent } from './gyms-detail/gyms-detail.component';
import { GymsNewComponent } from './gyms-new/gyms-new.component';


@NgModule({
  declarations: [GymsHomeComponent, GymsDetailComponent, GymsNewComponent],
  imports: [CommonModule, OntimizeWebModule, GymsRoutingModule, SharedModule],
})
export class GymsModule {}
