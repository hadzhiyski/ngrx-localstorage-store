import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIndexComponent } from './counter-index.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CounterIndexComponent', () => {
  let component: CounterIndexComponent;
  let fixture: ComponentFixture<CounterIndexComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CounterIndexComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterIndexComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
