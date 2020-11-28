import { TestBed } from '@angular/core/testing';

import { ResponsehomeService } from './responsehome.service';

describe('ResponsehomeService', () => {
  let service: ResponsehomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsehomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
