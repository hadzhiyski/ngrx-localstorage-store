import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppInjectorRef } from './app-injector-ref';
import { APP_PREFIX, LocalStorageService } from './local-storage.service';

export class StateLocalStorageLoader {
  static forFeature<TState>(feature: string, appPrefix?: string) {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          const localStorageService = StateLocalStorageLoader.getLocalStorageService(
            appPrefix
          );
          return {
            ...newState,
            ...localStorageService.loadInitialState(feature),
          };
        }
        return newState;
      };
    };
  }

  static forRoot<TState>(appPrefix?: string) {
    return (reducer: ActionReducer<TState>): ActionReducer<TState> => {
      return (state, action) => {
        const newState = reducer(state, action);
        if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
          const localStorageService = StateLocalStorageLoader.getLocalStorageService(
            appPrefix
          );
          return {
            ...newState,
            ...localStorageService.loadInitialState(),
          };
        }
        return newState;
      };
    };
  }

  private static getLocalStorageService(
    appPrefix?: string
  ): LocalStorageService {
    let providers;
    if (!!appPrefix) {
      providers = [
        { provide: APP_PREFIX, useValue: appPrefix },
        { provide: LocalStorageService },
      ];
      AppInjectorRef.withProviders(providers);
    }
    return AppInjectorRef.get(LocalStorageService, undefined, undefined);
  }
}
