import { TestBed, inject } from '@angular/core/testing';

import { SpeedrunDataService } from './speedrun-data.service';

describe('SpeedrunDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedrunDataService]
    });
  });

  it('should be created', inject([SpeedrunDataService], (service: SpeedrunDataService) => {
    expect(service).toBeTruthy();
  }));
});
