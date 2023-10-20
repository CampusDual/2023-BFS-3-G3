import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gyms-service',
  templateUrl: './gyms-service.component.html',
  styleUrls: ['./gyms-service.component.css']
})
export class GymsServiceComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
    
  // public getImageSrc(base64: any): any {
  //   return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64.bytes) : './assets/images/no-image-transparent.png';
  // }

  // public openDetail(data: any): void {
  //   this.dialog.open(EmployeeDetailComponent, {
  //     height: '330px',
  //     width: '520px',
  //     data: data
  //   });
  
}
