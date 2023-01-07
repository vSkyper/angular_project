import { Component, Input, OnInit } from '@angular/core';
import { NavbarElement, _navbarElement } from 'src/app/core/models/interfaces';

@Component({
  selector: 'app-navbar-element',
  templateUrl: './navbar-element.component.html',
  styleUrls: ['./navbar-element.component.scss']
})
export class NavbarElementComponent implements OnInit {
  @Input()
  public navbarElement: NavbarElement = _navbarElement; 

  constructor() { }

  ngOnInit(): void {
  }

}
