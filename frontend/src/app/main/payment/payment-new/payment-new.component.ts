import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { OIntegerInputComponent, OValidators } from 'ontimize-web-ngx';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css']
})
export class PaymentNewComponent implements OnInit {

  validatorsErrorEventCard: ValidatorFn[] = [];
  validatorsErrorEventCvv: ValidatorFn[] = [];
  constructor() { }

  ngOnInit() {
    this.validatorsErrorEventCard.push(OValidators.patternValidator(/^\d{16}$/, 'hasMoreThan16'));
    this.validatorsErrorEventCvv.push(OValidators.patternValidator(/^\d{3}$/, 'hasMoreThan3'));
  }
  
}
