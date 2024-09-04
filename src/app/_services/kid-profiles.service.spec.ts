import { TestBed } from '@angular/core/testing';

import { KidProfilesService } from './kid-profiles.service';

describe('KidProfilesService', () => {
  let service: KidProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
