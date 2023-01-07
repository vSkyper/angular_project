import { Component, OnInit } from '@angular/core';
import { NavbarElement } from 'src/app/core/models/interfaces/navbar-element/navbar-element.interface';
import { navbarElements } from './navbar-element-list';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-element-list.component.html',
  styleUrls: ['./navbar-element-list.component.scss'],
})
export class NavbarElementListComponent implements OnInit {
  public navbarElementList: NavbarElement[] = navbarElements;

  constructor() {}

  ngOnInit(): void {}
}
