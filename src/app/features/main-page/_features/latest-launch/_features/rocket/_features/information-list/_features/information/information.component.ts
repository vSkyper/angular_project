import { Component, Input, OnInit } from '@angular/core';
import { Information, _information } from 'src/app/core/models/interfaces/information/information.interface';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Input()
  public rocketInformation: Information = _information;

  constructor() { }

  ngOnInit(): void {
  }

}
