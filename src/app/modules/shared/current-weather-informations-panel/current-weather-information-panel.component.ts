import {Component, Input} from '@angular/core';
import {CurrentWeatherToShow} from "../interfaces/current-weather-to-show";

@Component({
  selector: 'app-current-weather-information-panel',
  templateUrl: './current-weather-information-panel.component.html',
  styleUrls: ['./current-weather-information-panel.component.css']
})
export class CurrentWeatherInformationPanelComponent
{
  @Input() currentWeather: CurrentWeatherToShow | null = null;
}
