import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentActivityPage } from './student-activity.page';

describe('StudentActivityPage', () => {
  let component: StudentActivityPage;
  let fixture: ComponentFixture<StudentActivityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
