import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestLaunchComponent } from './latest-launch.component';
import { CrewModule } from './_features/crew/crew.module';
import { RocketModule } from './_features/rocket/rocket.module';
import { CapsulesModule } from './_features/capsules/capsules.module';

@NgModule({
  declarations: [LatestLaunchComponent],
  exports: [LatestLaunchComponent],
  imports: [CommonModule, CrewModule, RocketModule, CapsulesModule],
})
export class LatestLaunchModule {}
