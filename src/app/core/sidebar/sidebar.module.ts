import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule
  ],
  declarations: [ SidebarComponent ],
  exports: [ SidebarComponent ],
  providers: [ SidebarService ]

})
export class SidebarModule { }
