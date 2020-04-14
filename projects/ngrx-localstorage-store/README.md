# ngrx-localstorage-store

## Installation
  Not yet publish on npm. Development in progress

## Dependencies
  - [@angular/common@9.1.1](https://www.npmjs.com/package/@angular/common/v/9.1.1)
  - [@angular/core@9.1.1](https://www.npmjs.com/package/@angular/core/v/9.1.1)
  - [@ngrx/store@9.1.0](https://www.npmjs.com/package/@ngrx/store/v/9.1.0)
  - [@ngrx/effects@9.1.0](https://www.npmjs.com/package/@ngrx/effects/v/9.1.0)
  - [rxjs@6.5.4](https://www.npmjs.com/package/rxjs/v/6.5.4)

## Getting Started

### Set AppPrefix (optional)
The app prefix will be used to generate new localStorage keys
``` typescript
@NgModule({
  providers: [
    {
      provide: APP_PREFIX,
      useValue: 'ngrx-localstorage-store-demo'
    }
  ]
})
export class AppModule {}
```

### Register localStorage loader

#### For Root
``` typescript
import { StateLocalStorageLoader } from 'ngrx-localstorage-store';

@NgModule({
  imports: [
    StoreModule.forRoot(rootReducers, {
      metaReducers: [
            StateLocalStorageLoader.forRoot<IAppState>(
            'ngrx-localstorage-store-demo'
          ),
      ]
    }),
  ],
  providers: [
    {
      provide: APP_PREFIX,
      useValue: 'ngrx-localstorage-store-demo'
    }
  ]
})
export class AppModule {}
```

#### For Feature
``` typescript
import { StateLocalStorageLoader } from 'ngrx-localstorage-store';
import * as fromCounter from './store/reducers/counter.reducer';
@NgModule({
  imports: [
    StoreModule.forFeature(fromCounter.counterFeatureKey, fromCounter.reducer, {
      metaReducers: [
        StateLocalStorageLoader.forFeature<fromCounter.ICounterState>(
          'ngrx-localstorage-store-demo',
          fromCounter.counterFeatureKey
        ),
      ],
    }),
  ],
})
export class CounterModule {}
```

### Save state to localStorage effects
You could save your state to localStorage via `@ngrx/effects`

``` typescript
import { LocalStorageEffects } from 'ngrx-localstorage-store';
import { counterFeatureKey, ICounterState } from '../reducers/counter.reducer';
import { selectCounterState } from '../selectors/counter.selectors';

@Injectable()
export class CounterEffects {
  saveToLocalStorage$ = this.localStorageEffects.saveForFeature(
    this.actions$,
    counterFeatureKey,
    selectCounterState
  );

  constructor(
    private actions$: Actions,
    private localStorageEffects: LocalStorageEffects<ICounterState>
  ) {}
}
```

### Examples & use cases
Take a look into the `ngrx-localstorage-store-demo` application

## License
Licensed to [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
