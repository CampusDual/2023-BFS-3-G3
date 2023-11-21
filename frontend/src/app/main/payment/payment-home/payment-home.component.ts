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

  public access : any;
  public service : any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private auth:AuthService,
    private ontimizeService: OntimizeService,
  ) { }

  ngOnInit() {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['id_rolename'], 'deletableUser').subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          if(res.data[0].id_rolename === 1 ){
            this.access = document.getElementById("user");
            this.access.style.display="none";

          }
          if(res.data[0].id_rolename === 2 ){
            this.service = document.getElementById("admin");
            this.service.style.display="none";  
          }

        }
    });
  }

  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
  }

  public openPaymentPage(buttonValue: string) {
    let user = this.auth.getSessionInfo().user;
    
    this.dialog.open(PaymentNewComponent, {
      height: '60%',
      width: '40%',
      data: {
        user_: user,
        quota: buttonValue,
      }, disableClose: false
    })
  }
  
}
