import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsGymadminRoutingModule } from './events-gymadmin-routing.module';
import { EventGymadminHomeComponent } from './event-gymadmin-home/event-gymadmin-home.component';


@NgModule({
  declarations: [EventGymadminHomeComponent],
  imports: [
    CommonModule,
    EventsGymadminRoutingModule
  ]
})
export class EventsGymadminModule { }
