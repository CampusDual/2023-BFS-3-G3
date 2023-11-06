import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, DialogService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;

  public validatorArray: ValidatorFn[] = [];
  
  public activeToggle: any;

  constructor(
    private auth:AuthService,
    private ontimizeService: OntimizeService,
    protected dialogService: DialogService,
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(AuthService) private authService: AuthService,
    ) {
  }

  ngOnInit() {
    this.validatorArray.push(this.matchValidator);

    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['id_rolename'], 'deletableUser').subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          if(res.data[0].id_rolename == 2) {
            this.activeToggle = document.getElementById('activeid');
             this.activeToggle.style.display = 'block';
          }
        }
      })
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
            this.dialogService.info('Tus datos no han podido ser borrados', 'Ponte en contacto con WheGym');
          }
          else{
            this.ontimizeService.delete({user_:this.auth.getSessionInfo().user}, 'user').subscribe(
              res => {
                if(res.code == 0) {
                  this.dialogService.info('Tus datos han sido borrados con éxito', 'Esperamos volver a verte');
                  this.authService.logout();
                }
              }
            )
          }

        }
    });
  }
}
