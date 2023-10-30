import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGymadminDetailComponent } from './service-gymadmin-detail.component';

describe('ServiceGymadminDetailComponent', () => {
  let component: ServiceGymadminDetailComponent;
  let fixture: ComponentFixture<ServiceGymadminDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceGymadminDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGymadminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
