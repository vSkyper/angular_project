import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsuleComponent } from './capsule.component';

@NgModule({
  declarations: [CapsuleComponent],
  exports: [CapsuleComponent],
  imports: [CommonModule],
})
export class CapsuleModule {}
