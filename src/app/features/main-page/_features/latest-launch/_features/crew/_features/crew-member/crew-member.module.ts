import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewMemberComponent } from './crew-member.component';

@NgModule({
  declarations: [CrewMemberComponent],
  exports: [CrewMemberComponent],
  imports: [CommonModule],
})
export class CrewMemberModule {}
