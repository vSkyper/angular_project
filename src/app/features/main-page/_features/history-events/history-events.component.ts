import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HistoryEventsService } from 'src/app/core/api/history-events.service';
import { HistoryEvent } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss'],
})
export class HistoryEventsComponent implements OnInit {
  public historyEventsArray: Array<HistoryEvent> = [];

  constructor(
    private historyEvents: HistoryEventsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.fetchHistoryEvents();
  }

  ngOnInit(): void {}

  fetchHistoryEvents() {
    this.historyEvents.getHistoryEvents().subscribe({
      next: (res) => {
        this.historyEventsArray = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.changeDetectorRef.detectChanges();
      },
    });
  }
}
