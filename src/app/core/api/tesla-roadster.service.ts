import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeslaRoadster } from '../models/interfaces/tesla-roadster/tesla-roadster.interface';

@Injectable({
  providedIn: 'root',
})
export class TeslaRoadsterService {
  constructor(private httpClient: HttpClient) {}

  getTeslaRoadster(): Observable<TeslaRoadster> {
    return this.httpClient.get('https://api.spacexdata.com/v4/roadster') as Observable<TeslaRoadster>;
  }
}
