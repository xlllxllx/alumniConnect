import { TestBed } from '@angular/core/testing';

import { ActivityCommentsService } from './activity-comments.service';

describe('ActivityCommentsService', () => {
  let service: ActivityCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
