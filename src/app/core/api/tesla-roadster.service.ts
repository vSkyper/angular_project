import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaRoadsterService {
  constructor(private httpClient: HttpClient) {}

  getTeslaRoadster(): Observable<any> {
    return this.httpClient.get('https://api.spacexdata.com/v4/roadster');
  }
}
