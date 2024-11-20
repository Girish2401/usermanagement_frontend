import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVisitingDetailsComponent } from './employee-visiting-details.component';

describe('EmployeeVisitingDetailsComponent', () => {
  let component: EmployeeVisitingDetailsComponent;
  let fixture: ComponentFixture<EmployeeVisitingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeVisitingDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeVisitingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
