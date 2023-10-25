import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGymadminHomeComponent } from './service-gymadmin-home.component';

describe('ServiceGymadminHomeComponent', () => {
  let component: ServiceGymadminHomeComponent;
  let fixture: ComponentFixture<ServiceGymadminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceGymadminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGymadminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
