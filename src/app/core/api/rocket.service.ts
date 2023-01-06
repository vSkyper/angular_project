import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  constructor(private httpClient: HttpClient) {}

  getRocket(id: string): Observable<any> {
    return this.httpClient.get(`https://api.spacexdata.com/v4/rockets/${id}`);
  }
}
