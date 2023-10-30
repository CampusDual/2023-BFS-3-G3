import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GymsGridDetailComponent } from '../gyms-grid-detail/gyms-grid-detail.component';

@Component({
  selector: 'app-gyms-grid-home',
  templateUrl: './gyms-grid-home.component.html',
  styleUrls: ['./gyms-grid-home.component.css']
})
export class GymsGridHomeComponent implements OnInit {

  constructor(
    protected dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  public openDetail(list: any): void {
    this.dialog.open(GymsGridDetailComponent, {
      height: '90%',
      width: '70%',
      data: list
    });
  }

}
