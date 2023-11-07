import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
