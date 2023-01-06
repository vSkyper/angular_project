import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryEventComponent } from './history-event.component';

@NgModule({
  declarations: [HistoryEventComponent],
  exports: [HistoryEventComponent],
  imports: [CommonModule],
})
export class HistoryEventModule {}
