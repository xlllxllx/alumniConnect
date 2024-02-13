import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminActivityResultPage } from './admin-activity-result.page';

describe('AdminActivityResultPage', () => {
  let component: AdminActivityResultPage;
  let fixture: ComponentFixture<AdminActivityResultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminActivityResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
