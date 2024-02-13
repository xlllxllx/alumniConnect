import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminActivityPage } from './admin-activity.page';

describe('AdminActivityPage', () => {
  let component: AdminActivityPage;
  let fixture: ComponentFixture<AdminActivityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
