import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarComponent } from './sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule
  ],
  declarations: [ SidebarComponent ],
  exports: [ SidebarComponent ]

})
export class SidebarModule { }
