import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-gyms-grid-detail',
  templateUrl: './gyms-grid-detail.component.html',
  styleUrls: ['./gyms-grid-detail.component.css']
})
export class GymsGridDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

 
  ngOnInit() {
  }

  getStars(rate: number): string {
    const roundedRate = Math.round(rate);
  if(roundedRate ){
    return '★'.repeat(roundedRate) + '☆'.repeat(5 - roundedRate)
  } else{
    return  '☆'.repeat(5)
  }
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
