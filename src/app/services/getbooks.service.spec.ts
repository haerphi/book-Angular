import { TestBed } from '@angular/core/testing';

import { GetbooksService } from './getbooks.service';

describe('GetbooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetbooksService = TestBed.get(GetbooksService);
    expect(service).toBeTruthy();
  });
});
