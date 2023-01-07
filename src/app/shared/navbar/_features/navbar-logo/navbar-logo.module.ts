import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLogoComponent } from './navbar-logo.component';

@NgModule({
  declarations: [NavbarLogoComponent],
  exports: [NavbarLogoComponent],
  imports: [CommonModule],
})
export class NavbarLogoModule {}
