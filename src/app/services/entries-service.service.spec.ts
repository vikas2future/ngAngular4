import { TestBed, inject } from '@angular/core/testing';

import { EntriesServiceService } from './entries-service.service';

describe('EntriesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntriesServiceService]
    });
  });

  it('should be created', inject([EntriesServiceService], (service: EntriesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
