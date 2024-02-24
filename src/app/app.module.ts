import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material/material.module";
import {SharedModule} from "./modules/shared/shared.module";
import {RoutingModule} from "./routing";
import {CurrentWeatherModule} from "./modules/view/current-weather/current-weather.module";
import {NotifierModule, NotifierOptions} from "angular-notifier";
import {ForecastWeatherModule} from "./modules/view/forecast-weather/forecast-weather.module";

const notifierConfig: NotifierOptions = {
  theme: "material"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    RoutingModule,
    CurrentWeatherModule,
    ForecastWeatherModule,
    NotifierModule.withConfig(notifierConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
