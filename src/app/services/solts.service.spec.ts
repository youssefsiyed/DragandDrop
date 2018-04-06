import { TestBed, inject } from '@angular/core/testing';

import { SoltsService } from './solts.service';

describe('SoltsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoltsService]
    });
  });

  it('should be created', inject([SoltsService], (service: SoltsService) => {
    expect(service).toBeTruthy();
  }));
});
