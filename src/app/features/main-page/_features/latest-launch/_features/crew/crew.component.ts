import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  @Input()
  public crewMembersId: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}
}
