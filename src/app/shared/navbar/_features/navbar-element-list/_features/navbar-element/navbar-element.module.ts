import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarElementComponent } from './navbar-element.component';
import { ScrollToDirective } from 'src/app/shared/directives/scroll-to.directive';

@NgModule({
  declarations: [NavbarElementComponent, ScrollToDirective],
  exports: [NavbarElementComponent],
  imports: [CommonModule],
})
export class NavbarElementModule {}
