import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymsuserRoutingModule } from './gymsuser-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { GymsGridHomeComponent } from './gyms-grid-home/gyms-grid-home.component';
import { GymsGridDetailComponent } from './gyms-grid-detail/gyms-grid-detail.component';


@NgModule({
  declarations: [GymsGridHomeComponent, GymsGridDetailComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    GymsuserRoutingModule
  ]
})
export class GymsuserModule { }
