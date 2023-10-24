import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { OFormComponent } from 'ontimize-web-ngx';
import { GalleryImage, GalleryOptions } from 'ontimize-web-ngx-gallery';

@Component({
  selector: 'app-gyms-grid-detail',
  templateUrl: './gyms-grid-detail.component.html',
  styleUrls: ['./gyms-grid-detail.component.css']
})
export class GymsGridDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  galleryImages: GalleryImage[];
  ngOnInit() {
  }
  /*@ViewChild('form',{static:true})
   form:OFormComponent;
 public serviceRoute:string;
loadRoute(){
   this.serviceRoute = "/main/gymsuser/"+ this.form.getDataValue('gymid').value + "/gymservices";
 
}*/

getValue() {
  return true;
}

}
