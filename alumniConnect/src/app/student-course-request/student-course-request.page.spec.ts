import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentCourseRequestPage } from './student-course-request.page';

describe('StudentCourseRequestPage', () => {
  let component: StudentCourseRequestPage;
  let fixture: ComponentFixture<StudentCourseRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentCourseRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
