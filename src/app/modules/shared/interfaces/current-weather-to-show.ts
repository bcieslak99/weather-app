export interface CurrentWeatherToShow
{
  cityName: string,
  lat: number,
  lon: number,
  country: string,
  weather: {
    description: string,
    icon: string
  },
  main: {
    temp: number,
    feels_like: number,
    pressure: number
  },
  wind: {
    speed: number,
  },
  dt: Date,
  sys: {
    country: string,
    sunrise: Date,
    sunset: Date
  },
  lastDataUpdate: Date
}
