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

  getValue() {
    return true;
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
    this.form.formGroup.controls['passwordconfirm'].updateValueAndValidity();
    this.form.formGroup.get('passwordconfirm').markAsTouched();
  }


  public deleteUser(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['id_rolename', 'activeGym'], 'deletableUser').subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          if(res.data[0].id_rolename == 1 && res.data[0].activeGym >0) {
            alert("Para eliminar tus datos ponte en contacto con WheGym");
          }
          else{
            this.ontimizeService.delete({user_:this.auth.getSessionInfo().user}, 'user').subscribe(
              res => {
                if(res.code == 0) {
                  alert("Tus datos han sido borrados con éxito");
                }
              }
            )
          }

        }
    });
  }
}
