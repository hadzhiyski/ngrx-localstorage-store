import { createReducer, on } from '@ngrx/store';
import * as ContactFormActions from '../actions/contact-form.actions';

export const contactFormFeatureKey = 'contactForm';

export interface IContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const initialState: IContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export const reducer = createReducer(
  initialState,

  on(ContactFormActions.submit, (state, action) => ({
    ...state,
    firstName: action.firstName,
    lastName: action.lastName,
    email: action.email,
    message: action.message
  }))
);
