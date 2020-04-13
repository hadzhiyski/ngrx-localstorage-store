import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { getLocalStorageMetaReducerForFeature } from 'ngrx-localstorage-store';
import { CounterIndexComponent } from './components/counter-index/counter-index.component';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterEffects } from './store/effects/counter.effects';
import * as fromCounter from './store/reducers/counter.reducer';

@NgModule({
  declarations: [CounterIndexComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,

    CounterRoutingModule,
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer, {
      metaReducers: [
        getLocalStorageMetaReducerForFeature<fromCounter.ICounterState>(
          'ngrx-localstorage-store-demo',
          fromCounter.counterFeatureKey
        ),
      ],
    }),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class CounterModule {}
