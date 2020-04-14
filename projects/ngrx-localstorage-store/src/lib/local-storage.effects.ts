import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata } from '@ngrx/effects';
import {
  Action,
  DefaultProjectorFn,
  MemoizedSelector,
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageEffects<TState> {
  constructor(
    private localStorageService: LocalStorageService,
    private store: Store<TState>
  ) {}

  saveForFeature(
    actions$: Actions,
    featureName: string,
    featureSelector: MemoizedSelector<
      TState,
      TState,
      DefaultProjectorFn<TState>
    >
  ): Observable<[Action, TState]> & CreateEffectMetadata {
    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store.pipe(select(featureSelector))),
          tap(([action, state]) =>
            this.localStorageService.set(featureName, state)
          )
        ),
      { dispatch: false }
    );
  }

  saveForRoot(
    actions$: Actions
  ): Observable<[Action, TState]> & CreateEffectMetadata {
    return createEffect(
      () =>
        actions$.pipe(
          withLatestFrom(this.store),
          tap(([action, state]) =>
            this.localStorageService.set(undefined, state)
          )
        ),
      { dispatch: false }
    );
  }
}
