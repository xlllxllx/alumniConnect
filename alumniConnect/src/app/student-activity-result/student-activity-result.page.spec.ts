import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentActivityResultPage } from './student-activity-result.page';

describe('StudentActivityResultPage', () => {
  let component: StudentActivityResultPage;
  let fixture: ComponentFixture<StudentActivityResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentActivityResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
