import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestLaunchComponent } from './latest-launch.component';
import { CrewModule } from './_features/crew/crew.module';

@NgModule({
  declarations: [LatestLaunchComponent],
  exports: [LatestLaunchComponent],
  imports: [CommonModule, CrewModule],
})
export class LatestLaunchModule {}
