import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { CitySearchPanelComponent } from './city-search-panel/city-search-panel.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    NavbarComponent,
    CitySearchPanelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    CitySearchPanelComponent
  ]
})
export class SharedModule {}
