import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CapsuleService {
  constructor(private httpClient: HttpClient) {}

  getCapsule(id: string): Observable<any> {
    return this.httpClient.get(`https://api.spacexdata.com/v4/capsules/${id}`);
  }
}
