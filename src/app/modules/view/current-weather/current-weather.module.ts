import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CurrentWeatherModule {}
