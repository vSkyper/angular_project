import { Component, Input, OnInit } from '@angular/core';
import { HistoryEvent, _historyEvent } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-history-event',
  templateUrl: './history-event.component.html',
  styleUrls: ['./history-event.component.scss'],
})
export class HistoryEventComponent implements OnInit {
  @Input()
  public historyEvent: HistoryEvent = _historyEvent;
  
  constructor() {}

  ngOnInit(): void {}
}
