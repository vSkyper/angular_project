import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarElementListModule } from './_features/navbar-element-list/navbar-element-list.module';
import { NavbarLogoModule } from './_features/navbar-logo/navbar-logo.module';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, NavbarElementListModule, NavbarLogoModule],
})
export class NavbarModule {}
