import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HistoryEventsService {
  constructor(private httpClient: HttpClient) {}

  getHistoryEvents(): Observable<any> {
    return this.httpClient.get('https://api.spacexdata.com/v4/history');
  }
}
