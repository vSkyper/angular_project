import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew.component';

@NgModule({
  declarations: [CrewComponent],
  exports: [CrewComponent],
  imports: [CommonModule],
})
export class CrewModule {}
