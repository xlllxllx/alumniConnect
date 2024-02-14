import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminJobPage } from './admin-job.page';

describe('AdminJobPage', () => {
  let component: AdminJobPage;
  let fixture: ComponentFixture<AdminJobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
