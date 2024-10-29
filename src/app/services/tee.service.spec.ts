import { TestBed } from '@angular/core/testing';

import { TeeService } from './tee.service';

describe('TeeService', () => {
  let service: TeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
