import { Component, OnInit, ViewChild } from '@angular/core';
import { OAppLayoutComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('layout', {static: true})
  layout: OAppLayoutComponent;

  constructor() { }

  ngOnInit() {
    // this.layout.appSidenav.sidenav.
  }
  getValue() {
    return true;
  }
  getValueBooleanType(type) {
    switch (type) {
      case 'number':
        return 1;
      case 'boolean':
        return false;
      case 'string':
        return 'Y'
    }}
}
