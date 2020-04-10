import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxLocalstorageStoreComponent } from './ngrx-localstorage-store.component';

describe('NgrxLocalstorageStoreComponent', () => {
  let component: NgrxLocalstorageStoreComponent;
  let fixture: ComponentFixture<NgrxLocalstorageStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxLocalstorageStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxLocalstorageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
