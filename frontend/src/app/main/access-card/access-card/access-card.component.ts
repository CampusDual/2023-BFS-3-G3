import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService, DialogService, OFormComponent, OntimizeService, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.css']
})
export class AccessCardComponent implements OnInit {
  @ViewChild('form',{static:true}) form:OFormComponent;
  public myAngularxQrCode: string = null;
  public qr: any;

  public txt:string
  constructor(
    private auth:AuthService,
    private ontimizeService: OntimizeService,
    protected dialogService: DialogService,
    protected translateService: OTranslateService
  ) {
    this.myAngularxQrCode = 'El usuario tiene el acceso permitido';
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
  }

  showQr() {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['active','nickname'], 'user').subscribe(
      res=> {
        if(res.data && res.data.length) {
          if(res.data[0].active) {
             this.qr = document.getElementById('qrid');
             this.qr.style.display = 'block';
          } else {
            this.dialogService.info('QR no generado',
            'Tienes la membresía caducada')
          }
        }
      }
    )
  }

}
