import { TestBed } from '@angular/core/testing';

import { FirebaseCourseService } from './firebase-course.service';

describe('FirebaseCourseService', () => {
  let service: FirebaseCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
