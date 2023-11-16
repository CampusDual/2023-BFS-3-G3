import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.css']
})
export class PaymentNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

}
