import { TestBed } from '@angular/core/testing';

import { DkToastService } from './dk-toast.service';

describe('DkToastService', () => {
  let service: DkToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DkToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
