import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

import { LocalStorageService } from '../services/local-storage.service';

export function getLocalStorageMetaReducerForFeature<TState>(feature: string) {
  return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
    return (state, action) => {
      const newState = reducer(state, action);
      if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
        return { ...newState, ...LocalStorageService.loadInitialState(feature) };
      }
      return newState;
    };
  };
}

export function getLocalStorageMetaReducerForRoot<TState>() {
  return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
    return (state, action) => {
      const newState = reducer(state, action);
      if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
        return { ...newState, ...LocalStorageService.loadInitialState() };
      }
      return newState;
    };
  };
}
