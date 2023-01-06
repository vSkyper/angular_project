import { Component, Input, OnInit } from '@angular/core';
import { CrewMember } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  @Input()
  public crewMembers: Array<CrewMember> = [];

  constructor() {}

  ngOnInit(): void {}
}
