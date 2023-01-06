import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewComponent } from './crew.component';
import { CrewMemberModule } from './_features/crew-member/crew-member.module';

@NgModule({
  declarations: [CrewComponent],
  exports: [CrewComponent],
  imports: [CommonModule, CrewMemberModule],
})
export class CrewModule {}
