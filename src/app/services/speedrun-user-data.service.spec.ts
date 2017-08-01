import { TestBed, inject } from '@angular/core/testing';

import { SpeedrunUserDataService } from './speedrun-user-data.service';

describe('SpeedrunUserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeedrunUserDataService]
    });
  });

  it('should be created', inject([SpeedrunUserDataService], (service: SpeedrunUserDataService) => {
    expect(service).toBeTruthy();
  }));
});
