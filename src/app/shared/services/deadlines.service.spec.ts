import { TestBed } from '@angular/core/testing';

import { DeadlinesService } from './deadlines.service';

describe('DeadlinesService', () => {
  let service: DeadlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeadlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
