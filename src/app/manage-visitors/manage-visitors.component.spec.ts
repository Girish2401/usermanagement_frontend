import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVisitorsComponent } from './manage-visitors.component';

describe('ManageVisitorsComponent', () => {
  let component: ManageVisitorsComponent;
  let fixture: ComponentFixture<ManageVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVisitorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
