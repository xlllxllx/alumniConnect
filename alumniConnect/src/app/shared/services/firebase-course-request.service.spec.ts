import { TestBed } from '@angular/core/testing';

import { FirebaseCourseRequestService } from './firebase-course-request.service';

describe('FirebaseCourseRequestService', () => {
  let service: FirebaseCourseRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCourseRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
