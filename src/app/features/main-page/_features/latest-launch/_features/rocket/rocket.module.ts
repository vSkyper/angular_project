import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketComponent } from './rocket.component';
import { InformationListModule } from './_features/information-list/information-list.module';

@NgModule({
  declarations: [RocketComponent],
  exports: [RocketComponent],
  imports: [CommonModule, InformationListModule],
})
export class RocketModule {}
