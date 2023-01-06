import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeslaRoadsterComponent } from './tesla-roadster.component';
import { ImagesModule } from './_features/images/images.module';
import { VideoModule } from './_features/video/video.module';
import { InformationListModule } from './_features/information-list/information-list.module';

@NgModule({
  declarations: [TeslaRoadsterComponent],
  exports: [TeslaRoadsterComponent],
  imports: [CommonModule, ImagesModule, VideoModule, InformationListModule],
})
export class TeslaRoadsterModule {}
