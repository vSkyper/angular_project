import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ScrollToDirective } from '../directives/scroll-to.directive';

@NgModule({
  declarations: [NavbarComponent, ScrollToDirective],
  exports: [NavbarComponent],
  imports: [CommonModule],
})
export class NavbarModule {}
