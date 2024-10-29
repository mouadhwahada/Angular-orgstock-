import { TestBed } from '@angular/core/testing';

import { PieceSaleService } from './piece-sale.service';

describe('PieceSaleService', () => {
  let service: PieceSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
