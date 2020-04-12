import { Inject, Injectable, InjectionToken } from '@angular/core';

const STATE_PREFIX = 'state';
export const DEFAULT_APP_PREFIX = 'app';

export function getDefaultAppPrefix() {
  return DEFAULT_APP_PREFIX;
}

export const APP_PREFIX = new InjectionToken<string>(
  'ngrx-localstorage-store app prefix',
  {
    providedIn: 'root',
    factory: getDefaultAppPrefix,
  }
);

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(APP_PREFIX) private appPrefix: string) {}

  loadInitialState(feature?: string): any {
    const key = this.getLocalStorageKey(this.appPrefix, feature);
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }

    return {};
  }

  private getLocalStorageKey(
    appPrefix: string,
    feature?: string
  ): string {
    let key = `${appPrefix}-${STATE_PREFIX}`;
    if (feature) {
      key = `${key}-${feature}`;
    }

    return key;
  }

  set(feature: string | undefined, value: any) {
    const key = this.getLocalStorageKey(this.appPrefix, feature);
    localStorage.setItem(key, JSON.stringify(value));
  }
}
