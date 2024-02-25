import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastWeatherComponent } from './forecast-weather.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ForecastWeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ForecastWeatherModule {}
