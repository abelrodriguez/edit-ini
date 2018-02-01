import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavComponent],
  declarations: [],
  providers: [LoggerService]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
