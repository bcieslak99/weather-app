import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../shared/services/http.service";
import {NotifierService} from "angular-notifier";
import {CityLocation} from "../../shared/interfaces/city-location";
import {ForecastWeather} from "../../shared/interfaces/forecast-weather";
import {ForecastWeatherToShow, Day, ForecastWeatherItem} from "../../shared/interfaces/forecast-weather-to-show";

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent implements OnInit
  {
    startCityName: string | null = null;
    weatherToShow: ForecastWeatherToShow | null = null;

    constructor(private http: HttpService, private notifierService: NotifierService) {}

    private saveCityName(cityLocation: CityLocation): void
    {
      let cityName: string | null = cityLocation.local_names["pl"];
      if(cityName !== null && cityName !== undefined) localStorage.setItem("cityName", cityName);
      else localStorage.setItem("cityName", cityLocation.name);
    }

    private prepareDataInSection(day: Day, forecastWeather: ForecastWeather): ForecastWeatherItem[]
    {
      let list = forecastWeather.list.filter(element => {
        let date: Date = new Date(element.dt * 1000);
        return day.date.getFullYear() === date.getFullYear() && day.date.getMonth() + 1 === date.getMonth() + 1 &&
          day.date.getDate() === date.getDate();
      });

      let dataInSection: ForecastWeatherItem[] = [];

      list.forEach(element => {
        dataInSection.push({
          dt: new Date(element.dt * 1000),
          weather: element.weather.length > 0 ? {
            description: element.weather[0].description.at(0)?.toUpperCase() + element.weather[0].description.substring(1),
            icon: element.weather[0].icon
          } : null,
          main: {
            temp_min: element.main.temp_min,
            temp_max: element.main.temp_max,
            pressure: element.main.pressure
          },
          wind: {
            speed: Math.round(element.wind.speed * 100 * 3.6) / 100
          }
        });
      });

      dataInSection.sort((a: ForecastWeatherItem, b: ForecastWeatherItem) => a.dt.getTime() - b.dt.getTime());

      return dataInSection;
    }

    private prepareSections(forecastWeather: ForecastWeather): Day[]
    {
      let sections: Day[] = [];

      forecastWeather.list.forEach(day => {
        let date: Date = new Date(day.dt * 1000);
        if(sections.filter(section => section.date.getFullYear() === date.getFullYear() &&
          section.date.getMonth() + 1 === date.getMonth() + 1 && section.date.getDate() === date.getDate()).length < 1)
          sections.push({
            date: date,
            list: []
          });
      });

      sections.sort((a: Day, b: Day) => a.date.getTime() - b.date.getTime());

      for(let i = 0; i < sections.length; i++)
        sections[i].list = this.prepareDataInSection(sections[i], forecastWeather);

      return sections;
    }

    private createWeatherObject(cityLocation: CityLocation, forecastWeather: ForecastWeather): ForecastWeatherToShow
    {
      let forecastWeatherData: ForecastWeatherToShow = {
        cityName: cityLocation.local_names["pl"] !== null && cityLocation.local_names["pl"] !== undefined ?
          cityLocation.local_names["pl"] : cityLocation.name,
        lat: cityLocation.lat,
        lon: cityLocation.lon,
        country: cityLocation.country,
        days: [],
        lastDataUpdate: new Date()
      }

      forecastWeatherData.days = this.prepareSections(forecastWeather);

      return forecastWeatherData;
  }

  checkForecastWeather(cityName: string): void
  {
    this.http.getCityLocation(cityName).subscribe({
      next: location => {
        if(location.length < 1)
        {
          this.notifierService.notify("warning", "Nie odnaleziono takiej miejscowości!");
          return;
        }

        this.saveCityName(location[0]);

        this.http.getForecastWeatherInCity(location[0])?.subscribe({
          next: forecastWeather => {
            this.weatherToShow = this.createWeatherObject(location[0], forecastWeather);
            console.log(this.weatherToShow);
          },
          error: err => {
            this.notifierService.notify("error", "Nie udało sie pobrać danych na temat pogody!");
          }
        });
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
      this.checkForecastWeather(this.startCityName);
  }
}
