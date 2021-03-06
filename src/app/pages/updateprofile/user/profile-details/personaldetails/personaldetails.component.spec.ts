import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldetailsComponent } from './personaldetails.component';

describe('PersonaldetailsComponent', () => {
  let component: PersonaldetailsComponent;
  let fixture: ComponentFixture<PersonaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
