import { TestBed } from '@angular/core/testing';

import { BkendService } from './bkend.service';

describe('BkendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BkendService = TestBed.get(BkendService);
    expect(service).toBeTruthy();
  });
});
