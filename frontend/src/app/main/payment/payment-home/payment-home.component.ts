import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PaymentNewComponent } from '../payment-new/payment-new.component';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
  styleUrls: ['./payment-home.component.css']
})
export class PaymentHomeComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public openPaymentPage() {
    // let customerId = this.form.getFieldValue('CUSTOMERID');
    // let date = new Date().getTime();
    this.dialog.open(PaymentNewComponent, {
      height: '35%',
      width: '70%',
      data: {
      }, disableClose: true
    })
  }
}
