import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  declarations: [ EditorComponent ]
})
export class EditorModule { }
