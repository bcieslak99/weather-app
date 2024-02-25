import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './current-weather.component';
import {SharedModule} from "../../shared/shared.module";
import {CurrentWeatherRouting} from "./current-weather-routing";

@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CurrentWeatherRouting
  ]
})
export class CurrentWeatherModule {}
