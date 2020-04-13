import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContactFormIndexComponent } from './components/contact-form-index/contact-form-index.component';
import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormEffects } from './store/effects/contact-form.effects';
import * as fromContactForm from './store/reducers/contact-form.reducer';
import {getLocalStorageMetaReducerForFeature} from 'ngrx-localstorage-store';

@NgModule({
  declarations: [ContactFormIndexComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,

    ContactFormRoutingModule,
    StoreModule.forFeature(
      fromContactForm.contactFormFeatureKey,
      fromContactForm.reducer, {
        metaReducers: [
          getLocalStorageMetaReducerForFeature('ngrx-localstorage-store-demo', fromContactForm.contactFormFeatureKey)
        ]
      }
    ),
    EffectsModule.forFeature([ContactFormEffects]),
  ],
})
export class ContactFormModule {}
