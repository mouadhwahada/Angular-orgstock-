import { TestBed } from '@angular/core/testing';

import { InterventionHisotryServiceService } from './intervention-hisotry-service.service';

describe('InterventionHisotryServiceService', () => {
  let service: InterventionHisotryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventionHisotryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
