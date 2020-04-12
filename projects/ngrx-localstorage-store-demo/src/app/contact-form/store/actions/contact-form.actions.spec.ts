import * as fromContactForm from './contact-form.actions';

describe('loadContactForms', () => {
  it('should return an action', () => {
    expect(fromContactForm.loadContactForms().type).toBe('[ContactForm] Load ContactForms');
  });
});
