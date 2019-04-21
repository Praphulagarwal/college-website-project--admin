import { TestBed } from '@angular/core/testing';

import { FrontEndService } from './front-end.service';

describe('FrontEndService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrontEndService = TestBed.get(FrontEndService);
    expect(service).toBeTruthy();
  });
});
