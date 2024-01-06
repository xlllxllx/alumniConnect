import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseRequestPage } from './course-request.page';

describe('CourseRequestPage', () => {
  let component: CourseRequestPage;
  let fixture: ComponentFixture<CourseRequestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CourseRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
