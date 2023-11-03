import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessCardRoutingModule } from './access-card-routing.module';
import { AccessCardComponent } from './access-card/access-card.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [AccessCardComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    AccessCardRoutingModule,
    QRCodeModule
  ]
})
export class AccessCardModule { }
