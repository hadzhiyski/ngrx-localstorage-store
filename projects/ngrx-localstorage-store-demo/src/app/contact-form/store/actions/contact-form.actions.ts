import { createAction, props } from '@ngrx/store';

export const submit = createAction(
  '[ContactForm] Submit',
  props<{firstName: string; lastName: string; email: string; message: string}>()
);




