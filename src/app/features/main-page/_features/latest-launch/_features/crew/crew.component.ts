import { Component, Input, OnInit } from '@angular/core';
import { LatestLaunchCrewMember } from 'src/app/core/models/interfaces/latest-launch/latest-launch.interface';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  @Input()
  public latestLaunchCrewMembers: Array<LatestLaunchCrewMember> = [];

  constructor() {}

  ngOnInit(): void {}
}
