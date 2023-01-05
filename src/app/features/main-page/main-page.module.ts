import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { WrapperImageModule } from './_features/wrapper-image/wrapper-image.module';
import { LatestLaunchModule } from './_features/latest-launch/latest-launch.module';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, NavbarModule, WrapperImageModule, LatestLaunchModule],
})
export class MainPageModule {}
