import { TestBed } from '@angular/core/testing';

import { RespondusService } from './respondus.service';

describe('RespondusService', () => {
  let service: RespondusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespondusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
