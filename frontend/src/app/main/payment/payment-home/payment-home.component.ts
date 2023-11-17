import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { PaymentNewComponent } from '../payment-new/payment-new.component';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
  styleUrls: ['./payment-home.component.css']
})
export class PaymentHomeComponent implements OnInit {

  @ViewChild('form', { static: false }) form: OFormComponent;


  constructor(
    private router: Router,
    public dialog: MatDialog,
    private auth:AuthService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
  }

  public openPaymentPage() {
    let user = this.form.getFieldValue('user_');
    // let date = new Date().getTime();
    this.dialog.open(PaymentNewComponent, {
      height: '70%',
      width: '60%',
      data: {
        user_: user
      }, disableClose: false
    })
  }
}
