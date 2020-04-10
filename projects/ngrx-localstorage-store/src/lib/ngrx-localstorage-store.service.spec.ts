import { TestBed } from '@angular/core/testing';

import { NgrxLocalstorageStoreService } from './ngrx-localstorage-store.service';

describe('NgrxLocalstorageStoreService', () => {
  let service: NgrxLocalstorageStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxLocalstorageStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
