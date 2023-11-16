import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PaymentNewComponent } from './payment-new/payment-new.component';


@NgModule({
  declarations: [PaymentHomeComponent, PaymentNewComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    OntimizeWebModule
  ]
})
export class PaymentModule { }
