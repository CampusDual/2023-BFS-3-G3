import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService, OAppLayoutComponent, OFormComponent, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('layout', {static: true})
  layout: OAppLayoutComponent;

  @ViewChild('radio', {static: true})
  radio: OAppLayoutComponent;

  @ViewChild('form',{static:true}) form:OFormComponent;
  public validatorArray: ValidatorFn[] = [];

  private array: Array<Object>;

  constructor(
    private translateService: OTranslateService,
  ) {
    this.array = this.getDataArray();
  }

  ngOnInit() {
    this.validatorArray.push(this.matchValidator);
    this.validatorArray.push(this.passwordValidator);
  }
  getDataArray() {
    const array: Array<Object> = [];
    array.push({
      'key': 1,
      'value': this.translateService.get('admin')
    });
    array.push({
      'key': 2,
      'value': this.translateService.get('user')
    });
   
    return array;
  }
 
  getValue() {
    return this.array[0]['key'];
  }

    public passwordValidator(control: any): any {
      try {
        const password = control.value;
  
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
          return { passwordNotValid: true };
        } else {
          return null;
        }
      } catch (e) {
        return null;
      }
    }

    public matchValidator(control: FormControl): ValidationErrors {
      try {
        const password = control.parent ? control.parent.controls['password'].value : null
        const passwordConfirm = control.parent ? control.parent.controls['PASSWORDCONFIRM'].value : null
        if(password && passwordConfirm && password != passwordConfirm){
          return { mustMatch: true }
        } else {
          return null;
        }
      } catch(e){
        return null;
      }
    }
  
    public reviewMatches(event: Event){
      this.form.formGroup.controls['passwordconfirm'].updateValueAndValidity();
      this.form.formGroup.get('passwordconfirm').markAsTouched();
    }
}
