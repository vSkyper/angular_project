import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  constructor(private httpClient: HttpClient) {}

  getCrew(id: string): Observable<any> {
    console.log(id);
    return this.httpClient.get(`https://api.spacexdata.com/v4/crew/${id}`);
  }
}
