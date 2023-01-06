import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationListComponent } from './information-list.component';
import { InformationModule } from './_features/information/information.module';

@NgModule({
  declarations: [InformationListComponent],
  exports: [InformationListComponent],
  imports: [CommonModule, InformationModule],
})
export class InformationListModule {}
