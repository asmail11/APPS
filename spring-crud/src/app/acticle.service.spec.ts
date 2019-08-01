import { TestBed } from '@angular/core/testing';

import { ActicleService } from './acticle.service';

describe('ActicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActicleService = TestBed.get(ActicleService);
    expect(service).toBeTruthy();
  });
});
