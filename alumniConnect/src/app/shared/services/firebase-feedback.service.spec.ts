import { TestBed } from '@angular/core/testing';

import { FirebaseFeedbackService } from './firebase-feedback.service';

describe('FirebaseFeedbackService', () => {
  let service: FirebaseFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
