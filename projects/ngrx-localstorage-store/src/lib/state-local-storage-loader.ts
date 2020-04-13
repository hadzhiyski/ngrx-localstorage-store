import { Injector } from '@angular/core';
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { APP_PREFIX, LocalStorageService } from './local-storage.service';

export function getLocalStorageMetaReducerForFeature<TState>(
  appPrefix: string,
  feature: string
) {
  return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
    return (state, action) => {
      const newState = reducer(state, action);
      if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
        const localStorageService = getLocalStorageService(appPrefix);
        return {
          ...newState,
          ...localStorageService.loadInitialState(feature),
        };
      }
      return newState;
    };
  };
}

export function getLocalStorageMetaReducerForRoot<TState>(appPrefix: string) {
  return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
    return (state, action) => {
      const newState = reducer(state, action);
      if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
        const localStorageService = getLocalStorageService(appPrefix);
        return {
          ...newState,
          ...localStorageService.loadInitialState(),
        };
      }
      return newState;
    };
  };
}

function getLocalStorageService(appPrefix: string): LocalStorageService {
  const injector = Injector.create({
    providers: [
      { provide: APP_PREFIX, useValue: appPrefix },
      { provide: LocalStorageService },
    ],
  });

  return injector.get(LocalStorageService);
}
