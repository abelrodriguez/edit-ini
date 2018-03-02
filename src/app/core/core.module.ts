import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { ElectronService } from './electron.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ConnectionbdService } from './connectionbd.service';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ SidebarModule ],
  declarations: [],
  providers: [
    LoggerService,
    ConnectionbdService,
    ElectronService
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
