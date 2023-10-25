import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesGymadminRoutingModule } from './services-gymadmin-routing.module';
import { ServiceGymadminHomeComponent } from './service-gymadmin-home/service-gymadmin-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { ServiceGymadminNewComponent } from './service-gymadmin-new/service-gymadmin-new.component';
import { ServiceGymadminDetailComponent } from './service-gymadmin-detail/service-gymadmin-detail.component';


@NgModule({
  declarations: [ServiceGymadminHomeComponent, ServiceGymadminNewComponent, ServiceGymadminDetailComponent],
  imports: [
    CommonModule,
    ServicesGymadminRoutingModule,
    OntimizeWebModule
  ]
})
export class ServicesGymadminModule { }
