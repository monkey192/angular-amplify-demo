import { TestBed } from '@angular/core/testing';

import { SessionControllerService } from './session-controller.service';

describe('SessionControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionControllerService = TestBed.get(SessionControllerService);
    expect(service).toBeTruthy();
  });
});
