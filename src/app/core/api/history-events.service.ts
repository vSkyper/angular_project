import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HistoryEvent } from '../models/interfaces/history-event/history-event.interface';

@Injectable({
  providedIn: 'root',
})
export class HistoryEventsService {
  constructor(private httpClient: HttpClient) {}

  getHistoryEvents(): Observable<HistoryEvent[]> {
    return this.httpClient.get('https://api.spacexdata.com/v4/history') as Observable<HistoryEvent[]>;
  }
}
