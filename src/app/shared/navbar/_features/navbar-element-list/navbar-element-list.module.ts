import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarElementListComponent } from './navbar-element-list.component';
import { NavbarElementModule } from './_features/navbar-element/navbar-element.module';

@NgModule({
  declarations: [NavbarElementListComponent],
  exports: [NavbarElementListComponent],
  imports: [CommonModule, NavbarElementModule],
})
export class NavbarElementListModule {}
