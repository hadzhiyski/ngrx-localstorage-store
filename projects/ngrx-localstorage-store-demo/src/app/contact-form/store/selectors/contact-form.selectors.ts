import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContactForm from '../reducers/contact-form.reducer';

export const selectContactFormState = createFeatureSelector<
  fromContactForm.IContactFormState
>(fromContactForm.contactFormFeatureKey);

export const selectContactFormActualState = createSelector(
  selectContactFormState,
  (state) => ({
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    message: state.message,
  })
);
