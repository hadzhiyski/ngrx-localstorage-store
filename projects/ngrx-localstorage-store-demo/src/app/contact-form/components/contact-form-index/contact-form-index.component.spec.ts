import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormIndexComponent } from './contact-form-index.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ContactFormIndexComponent', () => {
  let component: ContactFormIndexComponent;
  let fixture: ComponentFixture<ContactFormIndexComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ContactFormIndexComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormIndexComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
