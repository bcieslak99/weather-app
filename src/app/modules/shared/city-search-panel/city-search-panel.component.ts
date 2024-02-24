import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-city-search-panel',
  templateUrl: './city-search-panel.component.html',
  styleUrls: ['./city-search-panel.component.css']
})
export class CitySearchPanelComponent implements OnInit
{
  private readonly minimumLengthOfCityName: number = 2;
  private readonly maximumLengthOfCityName: number = 200;

  cityName: string = "";
  @Output() cityNameEmitter = new EventEmitter<string>;
  @Input() startCityName: string | null = null;

  cityForm = new FormGroup({
    cityName: new FormControl('', [Validators.required, Validators.minLength(this.minimumLengthOfCityName),
      Validators.maxLength(this.maximumLengthOfCityName)])
  });

  emitCityName(): void
  {
    let control: FormControl<string | null> = this.controls.cityName;

    if(control.value !== null)
      this.cityNameEmitter.emit(control.value);
  }

  get controls()
  {
    return this.cityForm.controls;
  }

  disabledSearchButton(): boolean
  {
    let control: FormControl<string | null> = this.controls.cityName;
    return control.value === null || control.hasError("required") || control.hasError("minlength") ||
      control.hasError("maxlength");
  }

  getErrorMessage(control: FormControl): string
  {
    if(control.hasError("required"))
      return "Musisz wpisać nazwę miejscowości!";
    else if(control.hasError("minLength"))
      return "Wprowadzono zbyt małą liczbę znaków!";
    else if(control.hasError("maxLength"))
      return "Wprowadzono zbyt dużą liczbę znaków!";
    else return ""
  }

  ngOnInit(): void
  {
    this.controls.cityName.setValue(this.startCityName);
  }
}
