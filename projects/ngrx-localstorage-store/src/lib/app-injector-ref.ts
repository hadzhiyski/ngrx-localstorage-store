import {
  AbstractType,
  InjectFlags,
  InjectionToken,
  Injector,
  Type,
  StaticProvider,
} from '@angular/core';

export class AppInjectorRef {
  private static injector: Injector;

  static set(injector: Injector) {
    AppInjectorRef.injector = injector;
  }

  static withProviders(providers: StaticProvider[]) {
    const injector = Injector.create({
      providers,
      parent: AppInjectorRef.injector,
      name: 'ngrx-localstorage-store-injector'
    });

    AppInjectorRef.set(injector);
  }

  static get<T>(
    token: Type<T> | InjectionToken<T> | AbstractType<T>,
    notFoundValue?: T,
    flags?: InjectFlags
  ): T {
    if (!!!AppInjectorRef.injector) {
      throw new Error(
        'Injector is not set! Set the app module injector in main.ts'
      );
    }

    return AppInjectorRef.injector.get<T>(token, notFoundValue, flags);
  }
}
