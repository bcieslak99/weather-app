import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {CurrentWeatherComponent} from "./modules/view/current-weather/current-weather.component";
import {ForecastWeatherComponent} from "./modules/view/forecast-weather/forecast-weather.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/current-weather",
    pathMatch: "full"
  },
  {
    path: "current-weather",
    loadChildren: () => import('./modules/view/current-weather/current-weather.module').then(m => m.CurrentWeatherModule),
    pathMatch: "full",
    title: "WeatherApp :: Aktualna Pogoda"
  },
  {
    path: "forecast-weather",
    loadChildren: () => import('./modules/view/forecast-weather/forecast-weather.module').then(m => m.ForecastWeatherModule),
    pathMatch: "full",
    title: "WeatherApp :: Prognozowana Pogoda"
  },
  {
    path: "**",
    redirectTo: "/current-weather"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
