import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGymadminNewComponent } from './service-gymadmin-new.component';

describe('ServiceGymadminNewComponent', () => {
  let component: ServiceGymadminNewComponent;
  let fixture: ComponentFixture<ServiceGymadminNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceGymadminNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceGymadminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
