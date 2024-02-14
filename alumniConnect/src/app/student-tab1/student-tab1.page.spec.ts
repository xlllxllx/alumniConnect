import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentTab1Page } from './student-tab1.page';

describe('StudentTab1Page', () => {
  let component: StudentTab1Page;
  let fixture: ComponentFixture<StudentTab1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
