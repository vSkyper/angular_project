import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CrewMember } from '../models/interfaces/crew-member/crew-member.interface';

@Injectable({
  providedIn: 'root',
})
export class CrewMemberService {
  constructor(private httpClient: HttpClient) {}

  getCrewMember(id: string): Observable<CrewMember> {
    return this.httpClient.get(`https://api.spacexdata.com/v4/crew/${id}`) as Observable<CrewMember>;
  }
}
