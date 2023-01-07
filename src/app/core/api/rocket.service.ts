import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../models/interfaces/rocket/rocket.interface';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  constructor(private httpClient: HttpClient) {}

  getRocket(id: string): Observable<Rocket> {
    return this.httpClient.get(`https://api.spacexdata.com/v4/rockets/${id}`) as Observable<Rocket>;
  }
}
