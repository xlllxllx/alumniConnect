import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentCourseDetailsPage } from './student-course-details.page';

describe('StudentCourseDetailsPage', () => {
  let component: StudentCourseDetailsPage;
  let fixture: ComponentFixture<StudentCourseDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentCourseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
