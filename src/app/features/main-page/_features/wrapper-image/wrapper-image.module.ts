import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperImageComponent } from './wrapper-image.component';

@NgModule({
  declarations: [WrapperImageComponent],
  exports: [WrapperImageComponent],
  imports: [CommonModule],
})
export class WrapperImageModule {}
