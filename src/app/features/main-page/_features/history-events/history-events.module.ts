import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryEventsComponent } from './history-events.component';
import { HistoryEventModule } from './_features/history-event/history-event.module';

@NgModule({
  declarations: [HistoryEventsComponent],
  exports: [HistoryEventsComponent],
  imports: [CommonModule, HistoryEventModule],
})
export class HistoryEventsModule {}
