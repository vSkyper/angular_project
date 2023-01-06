import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';

@NgModule({
  declarations: [InformationComponent],
  exports: [InformationComponent],
  imports: [CommonModule],
})
export class InformationModule {}
