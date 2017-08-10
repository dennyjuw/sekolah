import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTimetableComponent } from './school-timetable.component';

describe('SchoolTimetableComponent', () => {
  let component: SchoolTimetableComponent;
  let fixture: ComponentFixture<SchoolTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
