import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.scss'],
})
export class CapsulesComponent implements OnInit {
  @Input()
  public capsulesId: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}
}
