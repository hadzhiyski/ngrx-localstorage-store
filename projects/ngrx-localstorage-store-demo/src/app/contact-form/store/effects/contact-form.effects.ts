import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { LocalStorageEffects } from 'ngrx-localstorage-store';
import {
  contactFormFeatureKey,
  IContactFormState,
} from '../reducers/contact-form.reducer';
import { selectContactFormState } from '../selectors/contact-form.selectors';

@Injectable()
export class ContactFormEffects {
  loadFromStorage$ = this.localStorageEffects.saveForFeature(
    this.actions$,
    contactFormFeatureKey,
    selectContactFormState
  );

  constructor(
    private actions$: Actions,
    private localStorageEffects: LocalStorageEffects<IContactFormState>
  ) {}
}
