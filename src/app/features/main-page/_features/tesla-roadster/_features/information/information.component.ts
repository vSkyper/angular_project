import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  @Input()
  public teslaRoadsterLaunchDate: Date = new Date();

  @Input()
  public teslaRoadsterMass: string = '';

  @Input()
  public teslaRoadsterSpeed: string = '';

  @Input()
  public teslaRoadsterPeriodDays: string = '';

  constructor() {}

  ngOnInit(): void {}
}
