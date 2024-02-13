import { TestBed } from '@angular/core/testing';

import { FirebaseActivityCommentsService } from './firebase-activity-comments.service';

describe('FirebaseActivityCommentsService', () => {
  let service: FirebaseActivityCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseActivityCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
