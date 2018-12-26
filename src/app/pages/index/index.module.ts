import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IndexPageComponent
  ]
})
export class IndexModule { }
