import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { submit } from '../../store/actions/contact-form.actions';
import { IContactFormState } from '../../store/reducers/contact-form.reducer';
import { selectContactFormActualState } from '../../store/selectors/contact-form.selectors';

@Component({
  selector: 'app-contact-form-index',
  templateUrl: './contact-form-index.component.html',
  styleUrls: ['./contact-form-index.component.scss'],
})
export class ContactFormIndexComponent {
  form: FormGroup;

  get firstName(): AbstractControl | null {
    return this.form.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.form.get('lastName');
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get message(): AbstractControl | null {
    return this.form.get('message');
  }

  constructor(private store: Store<IContactFormState>) {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });

    this.store.pipe(select(selectContactFormActualState)).subscribe((state) => {
      this.firstName!.setValue(state.firstName);
      this.lastName!.setValue(state.lastName);
      this.email!.setValue(state.email);
      this.message!.setValue(state.message);
    });
  }

  submit(): void {
    const data = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      message: this.form.value.message,
    };

    this.store.dispatch(submit(data));
  }
}
