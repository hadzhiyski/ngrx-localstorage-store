import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContactFormEffects } from './contact-form.effects';

describe('ContactFormEffects', () => {
  let actions$: Observable<any>;
  let effects: ContactFormEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactFormEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ContactFormEffects>(ContactFormEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
