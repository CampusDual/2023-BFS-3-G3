import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PaymentNewComponent } from './payment-new/payment-new.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [PaymentHomeComponent, PaymentNewComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    OntimizeWebModule,
    MatDatepickerModule,
    MomentDateModule
  ]
})
export class PaymentModule { }
