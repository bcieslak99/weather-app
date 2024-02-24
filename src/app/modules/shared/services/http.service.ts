import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CityLocation} from "../interfaces/city-location";
import {CurrentWeather} from "../interfaces/current-weather";
import {Observable} from "rxjs";
import {ForecastWeather} from "../interfaces/forecast-weather";

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  private apiUrl: string = "https://api.openweathermap.org/";
  private accessKey: string = "";

  constructor(private http: HttpClient) {}

  getCityLocation(cityName: string): Observable<[CityLocation]>
  {
    return this.http.get<[CityLocation]>(this.apiUrl + "geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + this.accessKey);
  }

  getWeatherInCity(cityLocation: CityLocation): Observable<CurrentWeather> | null
  {
    if(cityLocation === null) return null;
    return this.http.get<CurrentWeather>(this.apiUrl + "data/2.5/weather?lat=" + cityLocation.lat + "&lon=" +
      cityLocation.lon + "&lang=pl&units=metric&appid=" + this.accessKey);
  }

  getForecastWeatherInCity(cityLocation: CityLocation): Observable<ForecastWeather> | null
  {
    if(cityLocation === null) return null;
    return this.http.get<ForecastWeather>(this.apiUrl + "data/2.5/forecast?lat=" + cityLocation.lat + "&lon=" +
      cityLocation.lon + "&lang=pl&units=metric&appid=" + this.accessKey);
  }
}
