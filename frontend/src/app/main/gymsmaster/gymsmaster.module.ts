import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymsmasterRoutingModule } from './gymsmaster-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { GymsmasterDetailComponent } from './gymsmaster-detail/gymsmaster-detail.component';
import { GymsmasterNewComponent } from './gymsmaster-new/gymsmaster-new.component';
import { GymsmasterHomeComponent } from './gymsmaster-home/gymsmaster-home.component';


@NgModule({
  declarations: [GymsmasterHomeComponent,GymsmasterDetailComponent, GymsmasterNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    GymsmasterRoutingModule
  ]
})
export class GymsmasterModule { }
