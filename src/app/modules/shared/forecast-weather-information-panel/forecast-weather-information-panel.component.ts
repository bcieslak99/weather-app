import {Component, Input} from '@angular/core';
import {ForecastWeatherToShow} from "../interfaces/forecast-weather-to-show";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-forecast-weather-information-panel',
  templateUrl: './forecast-weather-information-panel.component.html',
  styleUrls: ['./forecast-weather-information-panel.component.css']
})
export class ForecastWeatherInformationPanelComponent
{
  @Input() forecastWeatherToShow: ForecastWeatherToShow | null = null;
  protected readonly dateTimestampProvider = dateTimestampProvider;
}
