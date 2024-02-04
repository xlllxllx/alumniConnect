import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AddQuestionPage } from './add-question.page';

describe('AddQuestionPage', () => {
  let component: AddQuestionPage;
  let fixture: ComponentFixture<AddQuestionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
