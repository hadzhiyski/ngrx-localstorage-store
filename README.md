# ngrx-localstorage-store

## Installation
  Not yet publish on npm. Development in progress

## Dependencies
  - [@angular/common@9.1.1](https://www.npmjs.com/package/@angular/common/v/9.1.1)
  - [@angular/core@9.1.1](https://www.npmjs.com/package/@angular/core/v/9.1.1)
  - [@ngrx/store@9.1.0](https://www.npmjs.com/package/@ngrx/store/v/9.1.0)
  - [@ngrx/effects@9.1.0](https://www.npmjs.com/package/@ngrx/effects/v/9.1.0)
  - [rxjs@6.5.4](https://www.npmjs.com/package/rxjs/v/6.5.4)

## Build
There are a few warnings during build. These will be removed in the next Angular release. [Click](https://github.com/angular/angular/pull/36525)
```
WARNING in The basePath "D:/Projects/ngrx-localstorage-store/dist/ngrx-localstorage-store/ngrx-localstorage-store" computed from baseUrl "D:/Projects/ngrx-localstorage-store" and path mapping "dist/ngrx-localstorage-store/ngrx-localstorage-store" does not exist in the file-system.
It will not be scanned for entry-points.
```

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

### Using AppModule injector
You could use the main injector of you app to help the `ngrx-localstorage-store` library to use your DI.
This way, the app prefix parameters are optional. Simply you need to modify your `main.ts` file with the following code

``` typescript
import { AppInjectorRef } from 'ngrx-localstorage-store';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => AppInjectorRef.set(moduleRef.injector))
  .catch((err) => console.error(err));
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
            'ngrx-localstorage-store-demo' // optional if you use AppModule injector
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
          'ngrx-localstorage-store-demo', // optional if you use AppModule injector
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
