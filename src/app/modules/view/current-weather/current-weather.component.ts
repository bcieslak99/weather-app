import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {NotifierService} from "angular-notifier";
import {CityLocation} from "../../shared/interfaces/city-location";
import {CurrentWeatherToShow} from "../../shared/interfaces/current-weather-to-show";
import {CurrentWeather} from "../../shared/interfaces/current-weather";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit
{
  startCityName: string | null = null;
  weatherToShow: CurrentWeatherToShow | null = null;

  constructor(private http: HttpService, private notifierService: NotifierService) {}

  private saveCityName(cityLocation: CityLocation): void
  {
    let cityName: string | null = cityLocation.local_names["pl"];
    if(cityName !== null && cityName !== undefined) localStorage.setItem("cityName", cityName);
    else localStorage.setItem("cityName", cityLocation.name);
  }

  private createWeatherObject(cityLocation: CityLocation, currentWeather: CurrentWeather): CurrentWeatherToShow
  {
    let cityName: string = cityLocation.local_names["pl"] !== null && cityLocation.local_names["pl"] !== undefined ?
      cityLocation.local_names["pl"] : cityLocation.name;

    return {
      cityName: cityName,
      lat: cityLocation.lat,
      lon: cityLocation.lon,
      country: cityLocation.country,
      weather: {
        icon: currentWeather.weather[0].icon,
        description: currentWeather.weather[0].description.at(0)?.toUpperCase() +
          currentWeather.weather[0].description.substring(1)
      },
      main: {
        temp: currentWeather.main.temp,
        feels_like: currentWeather.main.feels_like,
        pressure: currentWeather.main.pressure
      },
      wind: {
        speed: Math.round(currentWeather.wind.speed * 100 * 3.6) / 100
      },
      sys: {
        country: currentWeather.sys.country,
        sunrise: new Date(currentWeather.sys.sunrise * 1000),
        sunset: new Date(currentWeather.sys.sunset * 1000)
      },
      dt: new Date(currentWeather.dt * 1000),
      lastDataUpdate: new Date()
    }
  }

  checkWeatherInCity(cityName: string): void
  {
    this.http.getCityLocation(cityName).subscribe({
      next: location => {
        if(location.length < 1)
        {
          this.notifierService.notify("warning", "Nie odnaleziono takiej miejscowości!");
          return;
        }

        this.saveCityName(location[0]);

        this.http.getWeatherInCity(location[0])?.subscribe({
          next: weather => {
            this.weatherToShow = this.createWeatherObject(location[0], weather);
          },
          error: err => {
            this.notifierService.notify("error", "Nie udało sie pobrać danych na temat pogody!");
          }
        })
      },
      error: err => {
        this.notifierService.notify("error", "Nie udało się pobrać danych na temat tej miejscowości!");
      }
    })
  }

  ngOnInit(): void
  {
    this.startCityName = localStorage.getItem("cityName");

    if(this.startCityName !== null)
      this.checkWeatherInCity(this.startCityName);
  }
}
