import { TestBed } from '@angular/core/testing';

import { GetactualusercritiquesService } from './getactualusercritiques.service';

describe('GetactualusercritiquesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetactualusercritiquesService = TestBed.get(GetactualusercritiquesService);
    expect(service).toBeTruthy();
  });
});
