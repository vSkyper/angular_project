import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { LatestLaunch } from '../models/interfaces/latest-launch/latest-launch.interface';

@Injectable({
  providedIn: 'root',
})
export class LatestLaunchService {
  constructor(private httpClient: HttpClient) {}

  getLatestLaunch(): Observable<LatestLaunch> {
    return this.httpClient.get('https://api.spacexdata.com/v5/launches/latest') as Observable<LatestLaunch>;
  }
}
