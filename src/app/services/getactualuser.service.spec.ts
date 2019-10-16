import { TestBed } from '@angular/core/testing';

import { GetactualuserService } from './getactualuser.service';

describe('GetactualuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetactualuserService = TestBed.get(GetactualuserService);
    expect(service).toBeTruthy();
  });
});
