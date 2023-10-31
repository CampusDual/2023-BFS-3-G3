import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    OntimizeWebModule
  ]
})
export class ProfilesModule { }
