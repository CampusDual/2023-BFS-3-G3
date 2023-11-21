import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogService, ODialogConfig, OFormComponent, OIntegerInputComponent, OTranslateService, OValidators } from 'ontimize-web-ngx';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css']
})
export class PaymentNewComponent implements OnInit {

  validatorsErrorEventCard: ValidatorFn[] = [];
  validatorsErrorEventCvv: ValidatorFn[] = [];
  validatorsErrorDateFormat: ValidatorFn[] = [];

  @ViewChild('form', { static: false }) form: OFormComponent;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogService: DialogService,
    private translateService: OTranslateService,
    private dialogRef: MatDialogRef<PaymentNewComponent>
    
  ) { }

  ngOnInit() {
    this.validatorsErrorEventCard.push(OValidators.patternValidator(/^\d{16}$/, 'hasMoreThan16'));
    this.validatorsErrorEventCvv.push(OValidators.patternValidator(/^\d{3}$/, 'hasMoreThan3'));
    this.validatorsErrorDateFormat.push(OValidators.patternValidator(/^(0[1-9]|1[0-2])\/\d{4}$/, 'errorDateFormat'));
  }

  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
      this.form.setFieldValues(this.data)
    }
  }

  public closeDialogCancel(event: any) {
    this.dialogRef.close();
  }


  public closeDialog(event: any) {
    const config: ODialogConfig = {
      icon: 'task'
    };
    
    this.dialogRef.close();
    this.dialogService.info(this.translateService.get('SUBSCRIBE_SUCCESS_TITLE'),
    this.translateService.get('SUBSCRIBE_SUCCESS_TXT'), config);
  }

  
}
