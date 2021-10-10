import { TestBed } from '@angular/core/testing';

import { IuserServiceService } from './iuser-service.service';

describe('UserServiceService', () => {
  let service: IuserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IuserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
