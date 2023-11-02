import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;

  public validatorArray: ValidatorFn[] = [];

  public admin:number;
  public user:number;

  constructor(
    private auth:AuthService,
    private ontimizeService: OntimizeService,
    ) {
  }

  ngOnInit() {
    this.validatorArray.push(this.matchValidator);
  }

  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
  }

  formInit(){
    this.form.setFieldValue("PASSWORDCONFIRM",this.form.getFieldValue("password"));
  }

  public matchValidator(control: FormControl): ValidationErrors {
    try {
      const password = control.parent ? control.parent.controls['password'].value : null
      const passwordConfirm = control.parent ? control.parent.controls['PASSWORDCONFIRM'].value : null
      if(password && passwordConfirm && password != passwordConfirm){
        return { mustMatch: true }
      }else{
        return null;
      }
    }catch(e){
      return null;
    }
  }

  public reviewMatches(event: Event){
    this.form.formGroup.controls['PASSWORDCONFIRM'].updateValueAndValidity();
    this.form.formGroup.get('PASSWORDCONFIRM').markAsTouched();
  }


  public deleteUser(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query(undefined, ['id_rolename'], 'user').subscribe(
      res => {
  });
}
}
