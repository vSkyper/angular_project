import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeslaRoadsterComponent } from './tesla-roadster.component';

@NgModule({
  declarations: [TeslaRoadsterComponent],
  exports: [TeslaRoadsterComponent],
  imports: [CommonModule],
})
export class TeslaRoadsterModule {}
