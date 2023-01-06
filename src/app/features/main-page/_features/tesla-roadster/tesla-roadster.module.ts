import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeslaRoadsterComponent } from './tesla-roadster.component';
import { ImagesModule } from './_features/images/images.module';
import { VideoModule } from './_features/video/video.module';
import { InformationModule } from './_features/information/information.module';

@NgModule({
  declarations: [TeslaRoadsterComponent],
  exports: [TeslaRoadsterComponent],
  imports: [CommonModule, ImagesModule, VideoModule, InformationModule],
})
export class TeslaRoadsterModule {}
