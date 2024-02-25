import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastWeatherComponent } from './forecast-weather.component';
import {SharedModule} from "../../shared/shared.module";
import {ForecastWeatherRouting} from "./forecast-weather-routing";

@NgModule({
  declarations: [
    ForecastWeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForecastWeatherRouting
  ]
})
export class ForecastWeatherModule {}
