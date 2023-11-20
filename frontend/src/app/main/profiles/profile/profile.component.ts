import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, DialogService, OFormComponent, OTranslateService, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;

  public validatorArray: ValidatorFn[] = [];
  public activeToggle: any;
  public isPasswordModified: boolean = false;
  private actRoute: ActivatedRoute;
  constructor(
    private auth:AuthService,
    private ontimizeService: OntimizeService,
    protected dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: OTranslateService,
    @Inject(AuthService) private authService: AuthService,
  ) {
    this.actRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.validatorArray.push(this.matchValidator);
    this.validatorArray.push(this.passwordValidator); // Agregar el validador de contraseña

    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['id_rolename'], 'deletableUser').subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          if(res.data[0].id_rolename == 2) {
            this.activeToggle = document.getElementById('activeid');
             this.activeToggle.style.display = 'block';
          }
        }
      });
  }

  onPasswordInput() {
    this.isPasswordModified = true;
  }
  getValue() {
    return true;
  }

  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
    // this.ontimizeService.query({user_:this.auth.getSessionInfo().user}).subscribe(
    //   res => {
    //     console.log('Datos cargados:', res);
    //   }
    // )
  }
  

  formInit(){
    this.form.setFieldValue("PASSWORDCONFIRM",this.form.getFieldValue("password"));
  }

  public matchValidator(control: FormControl): ValidationErrors | null{
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

 

  public passwordValidator(control: any): any {
    try {
      const password = control.value;

      if  (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/.test(password)) {
        return { passwordNotValid: true };
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  public deleteUser(){
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));
    this.ontimizeService.query({user_:this.auth.getSessionInfo().user}, ['id_rolename', 'activeGym'], 'deletableUser').subscribe(
      res => {
        if(res.data && res.data.length > 0) {
          if(res.data[0].id_rolename == 1 && res.data[0].activeGym >0) {
            this.dialogService.info(this.translateService.get('profile_admin_error'),this.translateService.get( 'profile_admin_message'));
          }
          else{
            this.dialogService.confirm(this.translateService.get('title_confirm'), this.translateService.get('text_confirm'));
            this.dialogService.dialogRef.afterClosed().subscribe( result => {
            if(result) {
              this.ontimizeService.delete({user_:this.auth.getSessionInfo().user}, 'user').subscribe(
                res => {
                  if(res.code == 0) {
                    this.dialogService.info(this.translateService.get('delete_data'),this.translateService.get( 'profile_delete_message'));
                    this.authService.logout();
                  } else {
                    return null;
                  }  
                    })
             
                }
              }
            )
          }
 
        }
    });
  }

  showPasswordConfirm = false;
 
  onInputChanged() {
    this.showPasswordConfirm = true;
  }

  deleteRedirect(event:any) {
    this.router.navigate(['../../../home'], { relativeTo: this.actRoute });
  }
}
