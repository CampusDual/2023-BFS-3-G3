import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { OFormComponent, OIntegerInputComponent, OValidators } from 'ontimize-web-ngx';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css']
})
export class PaymentNewComponent implements OnInit {

  validatorsErrorEventCard: ValidatorFn[] = [];
  validatorsErrorEventCvv: ValidatorFn[] = [];

  @ViewChild('form', { static: false }) form: OFormComponent;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    //this.validatorsErrorEventCard.push(OValidators.patternValidator(/^\d{16}$/, 'hasMoreThan16'));
    this.validatorsErrorEventCvv.push(OValidators.patternValidator(/^\d{3}$/, 'hasMoreThan3'));
  }

  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data)
    }
  }
  
}
