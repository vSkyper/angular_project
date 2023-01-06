import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';
import { ImageModule } from './_features/image/image.module';

@NgModule({
  declarations: [ImagesComponent],
  exports: [ImagesComponent],
  imports: [CommonModule, ImageModule],
})
export class ImagesModule {}
