import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdetailsComponent } from './jobdetails.component';

describe('JobdetailsComponent', () => {
  let component: JobdetailsComponent;
  let fixture: ComponentFixture<JobdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});