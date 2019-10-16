import { TestBed } from '@angular/core/testing';

import { GetactualuserempruntsService } from './getactualuseremprunts.service';

describe('GetactualuserempruntsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetactualuserempruntsService = TestBed.get(GetactualuserempruntsService);
    expect(service).toBeTruthy();
  });
});
