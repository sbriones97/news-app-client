import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('ServiceService', () => {
  let session: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    session = TestBed.inject(SessionService);
  });

  it('should be created', () => {
    expect(session).toBeTruthy();
  });
});
