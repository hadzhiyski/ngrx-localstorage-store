import { NgModule } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  providers: [LocalStorageService],
})
export class NgrxLocalStorageStoreModule {}
