export interface ForecastWeatherItem
{
  dt: Date,
  main: {
    temp_min: number,
    temp_max: number,
    pressure: number
  },
  weather: {
    description: string,
    icon: string
  } | null,
  wind: {
    speed: number
  }
}

export interface Day
{
  date: Date,
  list: ForecastWeatherItem[]
}

export interface ForecastWeatherToShow
{
  cityName: string,
  lat: number,
  lon: number,
  country: string,
  days: Day[],
  lastDataUpdate: Date
}
