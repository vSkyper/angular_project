import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsulesComponent } from './capsules.component';
import { CapsuleModule } from './_features/capsule/capsule.module';

@NgModule({
  declarations: [CapsulesComponent],
  exports: [CapsulesComponent],
  imports: [CommonModule, CapsuleModule],
})
export class CapsulesModule {}
