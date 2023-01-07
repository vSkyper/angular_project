import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Capsule } from '../models/interfaces/capsule/capsule.interface';

@Injectable({
  providedIn: 'root',
})
export class CapsuleService {
  constructor(private httpClient: HttpClient) {}

  getCapsule(id: string): Observable<Capsule> {
    return this.httpClient.get(`https://api.spacexdata.com/v4/capsules/${id}`) as Observable<Capsule>;
  }
}
