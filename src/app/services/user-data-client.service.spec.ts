import { TestBed } from '@angular/core/testing';

import { UserDataClientService } from './user-data-client.service';

describe('UserDataClientService', () => {
  let service: UserDataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
