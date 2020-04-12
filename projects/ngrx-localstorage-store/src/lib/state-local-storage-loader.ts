import { Injectable } from '@angular/core';
import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StateLocalStorageLoader {
  constructor(private localStorage: LocalStorageService) {}

  getLocalStorageMetaReducerForFeature<TState>(feature: string) {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          return {
            ...newState,
            ...this.localStorage.loadInitialState(feature),
          };
        }
        return newState;
      };
    };
  }

  getLocalStorageMetaReducerForRoot<TState>() {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          return { ...newState, ...this.localStorage.loadInitialState() };
        }
        return newState;
      };
    };
  }
}
