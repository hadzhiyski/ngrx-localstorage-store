import * as fromContactForm from '../reducers/contact-form.reducer';
import { selectContactFormState } from './contact-form.selectors';

describe('ContactForm Selectors', () => {
  it('should select the feature state', () => {
    const result = selectContactFormState({
      [fromContactForm.contactFormFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
