import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LatestLaunchService {
  constructor(private httpClient: HttpClient) {}

  getLatestLaunch(): Observable<any> {
    return this.httpClient.get('https://api.spacexdata.com/v4/launches/latest');
  }
}
