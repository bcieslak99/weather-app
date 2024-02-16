import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material/material.module";
import { NavbarComponent } from './navbar/navbar.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink
  ]
})
export class SharedModule {}
