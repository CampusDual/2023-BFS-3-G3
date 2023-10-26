import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OGridComponent, OListComponent, OServiceBaseComponent, OServiceComponent, OTableComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-gyms-service',
  templateUrl: './gyms-service.component.html',
  styleUrls: ['./gyms-service.component.css']
})
export class GymsServiceComponent implements OnInit {

  //@ViewChild('servicesTable', { static: false }) servicesTable: OTableComponent;
  //@ViewChild('serviceList', {static: false}) serviceList:  OListComponent;
  @ViewChild('serviceGrid', {static: false}) serviceGrid:  OGridComponent;

  @ViewChild('gymIdField', { static: false }) gymIdField: OTextInputComponent;
  gymid: number;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gymid = Number(params.get("gymid"));
    });
  }
  ngAfterViewInit() {
    this.gymIdField.setValue(this.gymid);
    this.serviceGrid.reloadData();

  } 
  
}
