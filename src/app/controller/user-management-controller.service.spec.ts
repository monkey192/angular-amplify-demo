import { TestBed } from '@angular/core/testing';

import { UserManagementControllerService } from './user-management-controller.service';

describe('UserManagementControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserManagementControllerService = TestBed.get(UserManagementControllerService);
    expect(service).toBeTruthy();
  });
});
