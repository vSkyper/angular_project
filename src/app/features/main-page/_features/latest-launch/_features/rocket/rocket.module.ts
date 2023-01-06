import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketComponent } from './rocket.component';

@NgModule({
  declarations: [RocketComponent],
  exports: [RocketComponent],
  imports: [CommonModule],
})
export class RocketModule {}
