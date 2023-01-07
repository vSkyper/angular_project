import { Component, Input, OnInit } from '@angular/core';
import { Information } from 'src/app/core/models/interfaces/information/information.interface';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.scss']
})
export class InformationListComponent implements OnInit {
  @Input()
  public rocketInformationList: Array<Information> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
