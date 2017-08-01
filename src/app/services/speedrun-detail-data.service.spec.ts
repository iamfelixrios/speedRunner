import { TestBed, inject } from '@angular/core/testing';

import { SpeedrunDetailDataService } from './speedrun-detail-data.service';

describe('SpeedrunDetailDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedrunDetailDataService]
    });
  });

  it('should be created', inject([SpeedrunDetailDataService], (service: SpeedrunDetailDataService) => {
    expect(service).toBeTruthy();
  }));
});
