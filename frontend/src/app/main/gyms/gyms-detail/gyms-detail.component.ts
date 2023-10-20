import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OTextInputComponent, OTextInputModule } from 'ontimize-web-ngx';

@Component({
  selector: 'app-gyms-detail',
  templateUrl: './gyms-detail.component.html',
  styleUrls: ['./gyms-detail.component.css']
})
export class GymsDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('form',{static:true})
   form:OFormComponent;
 public serviceRoute:string;
loadRoute(){
   this.serviceRoute = "/main/gyms/"+ this.form.getDataValue('gymid').value + "/gymservices";
 
}

}
