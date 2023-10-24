import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymsuserRoutingModule } from './gymsuser-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { GymsGridHomeComponent } from './gyms-grid-home/gyms-grid-home.component';


@NgModule({
  declarations: [GymsGridHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    GymsuserRoutingModule
  ]
})
export class GymsuserModule { }
