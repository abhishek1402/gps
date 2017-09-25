import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationdetailsComponent } from './educationdetails.component';

describe('EducationdetailsComponent', () => {
  let component: EducationdetailsComponent;
  let fixture: ComponentFixture<EducationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
