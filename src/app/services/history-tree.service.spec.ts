import { TestBed } from '@angular/core/testing';

import { HistoryTreeService } from './history-tree.service';

describe('HistoryTreeService', () => {
  let service: HistoryTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
