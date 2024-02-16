import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CurrentWeatherComponent} from "./modules/view/current-weather/current-weather.component";
import {ForecastWeatherComponent} from "./modules/view/forecast-weather/forecast-weather.component";

const routes: Routes = [
  {path: "", redirectTo: "/current-weather", pathMatch: "full"},
  {path: "current-weather", component: CurrentWeatherComponent, pathMatch: "full"},
  {path: "forecast-weather", component: ForecastWeatherComponent, pathMatch: "full"},
  {path: "**", redirectTo: "/current-weather"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
