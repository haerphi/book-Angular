import { TestBed } from '@angular/core/testing';

import { GetactualuseravisService } from './getactualuseravis.service';

describe('GetactualuseravisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetactualuseravisService = TestBed.get(GetactualuseravisService);
    expect(service).toBeTruthy();
  });
});
