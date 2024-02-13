import { TestBed } from '@angular/core/testing';

import { FirebaseActivityService } from './firebase-activity.service';

describe('FirebaseActivityService', () => {
  let service: FirebaseActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
