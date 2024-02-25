import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { CitySearchPanelComponent } from './city-search-panel/city-search-panel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CurrentWeatherInformationPanelComponent } from './current-weather-informations-panel/current-weather-information-panel.component';
import { ForecastWeatherInformationPanelComponent } from './forecast-weather-information-panel/forecast-weather-information-panel.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CitySearchPanelComponent,
    CurrentWeatherInformationPanelComponent,
    ForecastWeatherInformationPanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
    exports: [
        NavbarComponent,
        CitySearchPanelComponent,
        CurrentWeatherInformationPanelComponent,
        ForecastWeatherInformationPanelComponent
    ]
})
export class SharedModule {}
